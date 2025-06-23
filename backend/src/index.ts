import express, { NextFunction, Request, Response } from 'express'
import { Choices } from './constants/choices'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

function getChoices(_req: Request, res: Response) {
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
    throw new Error('An error occured while generating computers choice')
  }
  return computersChoice
}

async function getComputersChoice(_req: Request, res: Response, next: NextFunction) {
  try {
    const choice = await getRandomizedChoice()
    res.json(choice)
  } catch (error) {
    next(error)
  }
}

app.get('/choices', getChoices)
app.get('/choice', getComputersChoice)
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).send({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
