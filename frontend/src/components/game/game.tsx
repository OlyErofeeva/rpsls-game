import { useState } from 'react'
import { getChoices } from '../../services/api'
import type { Choice } from '../../types'
import Button from '../button/button'
import RoundResult from '../round-result/round-result'
import { getIconByChoiceId } from '../../helpers/choice-to-icon'
import styles from './game.module.css'

type ChoicesCall = {
  choices: Choice[]
  isLoading: boolean
  error: unknown
}

const Game = () => {
  const [choicesCallState, setChoicesCallState] = useState<ChoicesCall>({
    choices: [],
    isLoading: false,
    error: null,
  })

  async function handlePlayClick() {
    setChoicesCallState(currentState => ({
      ...currentState,
      isLoading: true,
      error: null,
    }))
    try {
      const choices = await getChoices()
      setChoicesCallState({
        choices: choices,
        isLoading: false,
        error: null,
      })
    } catch (error) {
      setChoicesCallState({
        choices: [],
        isLoading: false,
        error: error,
      })
    }
  }

  return (
    <div className={styles.game}>
      <a href="https://www.samkass.com/theories/RPSSL.html" target="_blank" className={styles.rulesLink}>
        Learn the rules
      </a>

      {choicesCallState.choices.length === 0 && !choicesCallState.isLoading && (
        <Button caption="Play the Game" customStyles={styles.playButton} onClick={handlePlayClick} />
      )}
      {choicesCallState.choices.length > 0 && (
        <>
          <p className={styles.hint}>Click on the option to play against the computer</p>
          <ul className={styles.choices}>
            {choicesCallState.choices.map(item => (
              <li key={item.id}>
                <Button caption={getIconByChoiceId(item.id)} onClick={() => {}} customStyles={styles.choiceButton} />
              </li>
            ))}
          </ul>
          <RoundResult />
        </>
      )}
      {choicesCallState.isLoading && <p>The game is loading ...</p>}
      {choicesCallState.error !== null && <p>Oops! Something went wrong, please try again</p>}
    </div>
  )
}

export default Game
