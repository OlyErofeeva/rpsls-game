import { getIconByChoiceId } from '../../helpers/choice-to-icon'
import type { Round } from '../../types'
import styles from './round-result.module.css'

type Props = {
  round: Round
}

const RoundResult: React.FC<Props> = ({ round }) => {
  const renderResultText = () => {
    switch (round.result) {
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
        <span className={styles.choiceMade}>{getIconByChoiceId(round.playerChoiceId)}</span>
        <span className={styles.divider}>vs</span>
        <span className={styles.choiceMade}>{getIconByChoiceId(round.computerChoiceId)}</span>
      </div>
      <p className={styles.resultText}>{renderResultText()}</p>
    </>
  )
}

export default RoundResult
