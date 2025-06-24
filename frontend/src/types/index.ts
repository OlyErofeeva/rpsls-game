export type Choice = {
  id: number
  name: string
}

export type RoundResult = 'win' | 'lose' | 'tie'

export type Round = {
  results: RoundResult
  player: number // choice id
  computer: number // choice id
}
