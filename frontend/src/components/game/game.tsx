import Button from '../button/button'
import styles from './game.module.css'

const Game = () => {
  const choicesDummy = [
    { id: 1, name: 'rock' },
    { id: 2, name: 'paper' },
    { id: 3, name: 'scissors' },
    { id: 4, name: 'lizard' },
    { id: 5, name: 'spock' },
  ]

  const choiceToIconMap = new Map([
    [1, '🪨'],
    [2, '📜'],
    [3, '✂️'],
    [4, '🦎'],
    [5, '🖖'],
  ])

  function getIconByChoiceId(choiceId: number) {
    return choiceToIconMap.get(choiceId) || '👾'
  }

  return (
    <div className={styles.game}>
      <a href="https://www.samkass.com/theories/RPSSL.html" target="_blank" className={styles.rulesLink}>
        Learn the rules
      </a>
      <Button caption="Play the Game" onClick={() => {}} customStyles={styles.playButton} />
      <p className={styles.hint}>Click on the option to play against the computer</p>
      <ul className={styles.choices}>
        {choicesDummy.map(item => (
          <li key={item.id} className={styles.choiceItem}>
            <Button caption={getIconByChoiceId(item.id)} onClick={() => {}} customStyles={styles.choiceButton} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Game
