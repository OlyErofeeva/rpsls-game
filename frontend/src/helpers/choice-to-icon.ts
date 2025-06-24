const choiceToIconMap = new Map([
  [1, '🪨'],
  [2, '📜'],
  [3, '✂️'],
  [4, '🦎'],
  [5, '🖖'],
])

export function getIconByChoiceId(choiceId: number) {
  return choiceToIconMap.get(choiceId) || '👾'
}
