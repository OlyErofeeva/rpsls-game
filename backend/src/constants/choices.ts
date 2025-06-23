export const Rock = {
  id: 1,
  name: 'rock',
} as const

export const Paper = {
  id: 2,
  name: 'paper',
} as const

export const Scissors = {
  id: 3,
  name: 'scissors',
} as const

export const Lizard = {
  id: 4,
  name: 'lizard',
} as const

export const Spock = {
  id: 5,
  name: 'spock',
} as const

export const Choices = [Rock, Paper, Scissors, Lizard, Spock] as const
