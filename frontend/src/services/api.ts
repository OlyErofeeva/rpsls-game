import { nanoid } from 'nanoid'
import type { Choice, Round, RoundResult } from '../types'

const API_BASE_URL = 'http://localhost:3000'

type RoundDTO = {
  results: RoundResult
  player: number // choice id
  computer: number // choice id
}

async function handleError(response: Response) {
  if (!response.ok) {
    const { message } = await response.json()
    throw new Error(message)
  }
}

export async function getChoices(): Promise<Choice[]> {
  const response = await fetch(`${API_BASE_URL}/choices`, { method: 'GET' })
  await handleError(response)
  const choices = await response.json()
  return choices
}

export async function createRound(choiceId: RoundDTO['player']): Promise<Round> {
  const response = await fetch(`${API_BASE_URL}/play`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      player: choiceId,
    }),
  })
  await handleError(response)
  const round: RoundDTO = await response.json()

  return {
    id: nanoid(),
    playerChoiceId: round.player,
    computerChoiceId: round.computer,
    result: round.results,
  }
}
