import type { Round, RoundResult } from '../../types'
import { getIconByChoiceId } from '../../helpers/choice-to-icon'
import Button from '../button/button'
import styles from './scoreboard.module.css'

type Props = {
  gameResults: Round[]
  onReset: () => void
}

const Scoreboard: React.FC<Props> = ({ gameResults, onReset }) => {
  const renderResultText = (result: RoundResult) => {
    // I know I could've just used text-transform: capitalize,
    // but I prefer to map the codes from backend, rather than
    // rely on receiving them in a nice and usable format.
    switch (result) {
      case 'win': {
        return 'Win'
      }
      case 'lose': {
        return 'Lose'
      }
      case 'tie': {
        return 'Tie'
      }
    }
  }

  const countByResultType = (resultType: RoundResult) => {
    return gameResults.filter(round => round.result === resultType).length
  }

  return (
    <div>
      <table className={styles.table}>
        <caption className={styles.tableTitle}>
          <div className={styles.tableTitleBlock}>
            <span>10 Recent Games</span>
            <Button caption="Reset" onClick={onReset} />
          </div>
        </caption>
        <thead>
          <tr className={styles.headerRow}>
            <th scope="col" className={styles.playerColumn}>
              Player
            </th>
            <th scope="col">{`${countByResultType('win')} : ${countByResultType('lose')}`}</th>
            <th scope="col" className={styles.opponentColumn}>
              Computer
            </th>
            <th scope="col" className={styles.resultColumn}>
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {gameResults.map(round => (
            <tr className={styles.row} key={round.id}>
              <td className={styles.playerColumn}>{getIconByChoiceId(round.playerChoiceId)}</td>
              <td>vs</td>
              <td className={styles.opponentColumn}>{getIconByChoiceId(round.computerChoiceId)}</td>
              <td className={styles.resultColumn}>{renderResultText(round.result)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Scoreboard
