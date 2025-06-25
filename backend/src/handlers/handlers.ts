import { NextFunction, Request, Response } from 'express'
import { Choices } from "../constants/choices"
import { rulesMap } from "../constants/rules"

export function getChoices(_req: Request, res: Response) {
  res.json(Choices)
}

async function getRandomizedChoice() {
  const randomNumberResponse: { random_number: number } = await fetch('https://codechallenge.boohma.com/random').then(
    res => res.json(),
  )
  const randomNumber = randomNumberResponse.random_number

  // 1-20: rock, 21-40: paper, 41-60: scissors, 61-80: lizard, 81-100: spock
  const computersChoiceId = Math.ceil(randomNumber / 20)
  const computersChoice = Choices.find(item => item.id === computersChoiceId)
  if (!computersChoice) {
    console.log('random number service response:')
    console.log(randomNumberResponse)
    throw new Error('An error occured while generating computers choice')
  }
  return computersChoice
}

export async function getComputersChoice(_req: Request, res: Response, next: NextFunction) {
  try {
    const choice = await getRandomizedChoice()
    res.json(choice)
  } catch (error) {
    next(error)
  }
}

export async function createRound(req: Request, res: Response, next: NextFunction) {
  try {
    const playerChoice: number = req.body.player
    const computersChoice = await getRandomizedChoice()

    let roundResult: string
    if (computersChoice.id === playerChoice) {
      roundResult = 'tie'
    } else {
      const isPlayerWinner = rulesMap.get(playerChoice)?.includes(computersChoice.id)
      roundResult = isPlayerWinner ? 'win' : 'lose'
    }

    res.json({
      results: roundResult,
      player: playerChoice,
      computer: computersChoice.id,
    })
  } catch (error) {
    next(error)
  }
}
