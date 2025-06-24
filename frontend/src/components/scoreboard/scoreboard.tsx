import { getIconByChoiceId } from '../../helpers/choice-to-icon'
import styles from './scoreboard.module.css'

const Scoreboard = () => {
  const gameResultsDummy = [
    {
      player: 1,
      computer: 2,
      results: 'lose',
    },
    {
      player: 1,
      computer: 2,
      results: 'lose',
    },
    {
      player: 1,
      computer: 2,
      results: 'lose',
    },
  ]

  return (
    <div>
      <table className={styles.table}>
        <caption className={styles.tableTitle}>10 Recent Games</caption>
        <thead>
          <tr className={styles.headerRow}>
            <th scope="col" className={styles.playerColumn}>
              Player
            </th>
            <th scope="col">10:0</th>
            <th scope="col" className={styles.opponentColumn}>
              Computer
            </th>
            <th scope="col" className={styles.resultColumn}>
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {gameResultsDummy.map(round => (
            // TODO: add id of the round as key
            <tr className={styles.row}>
              <td className={styles.playerColumn}>{getIconByChoiceId(round.player)}</td>
              <td>vs</td>
              <td className={styles.opponentColumn}>{getIconByChoiceId(round.computer)}</td>
              <td className={styles.resultColumn}>{round.results}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Scoreboard
