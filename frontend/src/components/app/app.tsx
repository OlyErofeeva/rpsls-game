import Header from '../header/header'
import Game from '../game/game'
import styles from './app.module.css'
import Scoreboard from '../scoreboard/scoreboard'

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Game />
        <Scoreboard />
      </main>
    </>
  )
}

export default App
