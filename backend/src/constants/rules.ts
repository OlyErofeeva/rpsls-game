export const rulesMap = new Map([
  [1, [3, 4]], // rock (1) crushes scissors (3) & lizard (4)
  [2, [1, 5]], // paper (2) covers rock (1) & disproves Spock (5)
  [3, [2, 4]], // scissors (3) cut paper (2) & decapitate lizard (4)
  [4, [2, 5]], // lizard (4) eats paper (2) & poisons Spock (5)
  [5, [1, 3]], // Spock (5) vaporizes rock (1) & smashes scissors (3)
])
