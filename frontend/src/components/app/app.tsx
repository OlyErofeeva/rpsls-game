import { useEffect, useState } from 'react'
import type { Round } from '../../types'
import Header from '../header/header'
import Game from '../game/game'
import Scoreboard from '../scoreboard/scoreboard'
import styles from './app.module.css'

function loadInitialResults(): Round[] {
  return JSON.parse(localStorage.getItem('localResults') || '[]')
}

const App = () => {
  const [gameResults, setGameResults] = useState<Round[]>(loadInitialResults)

  const handleRoundCreated = (round: Round) => {
    setGameResults(currentGameResults => {
      let recentResults = currentGameResults
      if (currentGameResults.length > 9) {
        recentResults = currentGameResults.slice(0, 9)
      }
      return [round, ...recentResults]
    })
  }
  
  useEffect(() => {
    localStorage.setItem('localResults', JSON.stringify(gameResults))
  }, [gameResults])
  
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Game onRoundCreated={handleRoundCreated} />
        <Scoreboard gameResults={gameResults} />
      </main>
    </>
  )
}

export default App
