import type { Round, RoundResult } from '../../types'
import { getIconByChoiceId } from '../../helpers/choice-to-icon'
import styles from './scoreboard.module.css'

type Props = {
  gameResults: Round[]
}

const Scoreboard: React.FC<Props> = ({ gameResults }) => {
  const renderResultText = (result: RoundResult) => {
    // I know I could've just used text-transform: uppercase, 
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
    return gameResults.filter(round => round.results === resultType).length
  }

  return (
    <div>
      <table className={styles.table}>
        <caption className={styles.tableTitle}>10 Recent Games</caption>
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
            // TODO: add id of the round as key
            <tr className={styles.row}>
              <td className={styles.playerColumn}>{getIconByChoiceId(round.player)}</td>
              <td>vs</td>
              <td className={styles.opponentColumn}>{getIconByChoiceId(round.computer)}</td>
              <td className={styles.resultColumn}>{renderResultText(round.results)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Scoreboard
