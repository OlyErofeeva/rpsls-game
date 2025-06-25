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

const motivationalMessages = [
  `Our greatest glory is not in never falling, but in rising every time we fall. (Confucius)`,
  `I can accept failure, everyone fails at something. But I can’t accept not trying. (Michael\u00A0Jordan)`,
  `Success is not final, failure is not fatal: it is the courage to continue that counts. (Winston\u00A0Churchill)`,
  `Failure is simply the opportunity to begin again, this time more intelligently. (Henry\u00A0Ford)`,
  `Only those who dare to fail greatly can ever achieve greatly. (Robert\u00A0F.\u00A0Kennedy)`,
  `I’ve failed over and over and over again in my life and that is why I succeed. (Michael\u00A0Jordan)`,
  `Failure should be our teacher, not our undertaker. (Denis\u00A0Waitley)`,
  `The phoenix must burn to emerge. (Janet\u00A0Fitch)`,
  `There is no failure except in no longer trying. (Chris\u00A0Bradford)`,
  `You build on failure. You use it as a stepping stone. (Johnny\u00A0Cash)`,
  `Defeat is not the worst of failures. Not to have tried is the true failure. (George\u00A0Edward\u00A0Woodberry)`,
  `Success is most often achieved by those who don’t know that failure is inevitable. (Coco\u00A0Chanel)`,
  'You got knocked down. So what? Get up, dust off, and hit back harder. That’s how you earn respect. (Jason\u00A0Statham)',
]

export function getMotivationalMessage(): string {
  const randomIndex = Math.floor(Math.random() * motivationalMessages.length)
  return motivationalMessages[randomIndex]
}
