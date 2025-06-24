import Header from '../header/header'
import Game from '../game/game'
import styles from './app.module.css'

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Game />
      </main>
    </>
  )
}

export default App
