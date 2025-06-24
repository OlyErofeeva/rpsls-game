export type Choice = {
  id: number
  name: string
}

export type RoundResult = 'win' | 'lose' | 'tie'

export type Round = {
  id: string
  result: RoundResult
  playerChoiceId: number
  computerChoiceId: number
}
