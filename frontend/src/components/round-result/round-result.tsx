import { getIconByChoiceId } from '../../helpers/choice-to-icon'
import styles from './round-result.module.css'

const RoundResult = () => {
  const roundDummy = {
    player: 1,
    computer: 2,
    results: 'win',
  }

  const renderResultText = () => {
    switch (roundDummy.results) {
      case 'win': {
        return 'You win! 🎉'
      }
      case 'lose': {
        return 'You lose...'
      }
      case 'tie': {
        return "It's a tie 🤝"
      }
    }
  }

  return (
    <>
      <h2 className={styles.resultTitle}>Round Result:</h2>
      <div className={styles.roundChoices}>
        <span className={styles.choiceMade}>{getIconByChoiceId(roundDummy.player)}</span>
        <span className={styles.divider}>vs</span>
        <span className={styles.choiceMade}>{getIconByChoiceId(roundDummy.computer)}</span>
      </div>
      <p className={styles.resultText}>{renderResultText()}</p>
    </>
  )
}

export default RoundResult
