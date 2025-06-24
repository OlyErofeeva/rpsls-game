const winMessagesMap = new Map([
  [2, 'Killing spree!'],
  [3, 'Rampage!'],
  [4, 'Dominating!'],
  [5, 'Unstoppable!'],
  [6, 'Godlike!'],
  [7, 'Legendary!'],
])

export function getWinningStreakMessage(winCounter: number) {
  if (winCounter > 7) {
    return winMessagesMap.get(7) || ''
  } else {
    return winMessagesMap.get(winCounter) || ''
  }
}
