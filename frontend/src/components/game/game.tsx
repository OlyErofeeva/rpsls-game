import { useState } from 'react'
import { createRound, getChoices } from '../../services/api'
import type { Choice, Round } from '../../types'
import Button from '../button/button'
import RoundResult from '../round-result/round-result'
import { getIconByChoiceId } from '../../helpers/choice-to-icon'
import styles from './game.module.css'

type ChoicesCall = {
  choices: Choice[]
  isLoading: boolean
  error: unknown
}

type RoundCall = {
  round?: Round
  isLoading: boolean
  error: unknown
}

const Game = () => {
  const [choicesCallState, setChoicesCallState] = useState<ChoicesCall>({
    choices: [],
    isLoading: false,
    error: null,
  })
  const [roundCallState, setRoundCallState] = useState<RoundCall>({
    round: undefined,
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

  async function handleChoiceClick(id: number) {
    setRoundCallState({
      round: undefined,
      isLoading: true,
      error: null,
    })
    try {
      const round = await createRound(id)
      setRoundCallState({
        round,
        isLoading: false,
        error: null,
      })
    } catch (error) {
      setRoundCallState({
        round: undefined,
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
        <Button
          caption="Play the Game"
          customStyles={styles.playButton}
          onClick={handlePlayClick}
          disabled={choicesCallState.isLoading}
        />
      )}
      {choicesCallState.choices.length > 0 && (
        <>
          <p className={styles.hint}>Click on the option to play against the computer</p>
          <ul className={styles.choices}>
            {choicesCallState.choices.map(item => (
              <li key={item.id}>
                <Button
                  caption={getIconByChoiceId(item.id)}
                  onClick={() => {
                    handleChoiceClick(item.id)
                  }}
                  customStyles={styles.choiceButton}
                  disabled={roundCallState.isLoading}
                />
              </li>
            ))}
          </ul>

          {roundCallState.isLoading && <p>Awaiting the opponent ...</p>}
          {roundCallState.error !== null && <p>Oops! Something went wrong, please try again</p>}
          {roundCallState.round && <RoundResult round={roundCallState.round} />}
        </>
      )}
      {choicesCallState.isLoading && <p>The game is loading ...</p>}
      {choicesCallState.error !== null && <p>Oops! Something went wrong, please try again</p>}
    </div>
  )
}

export default Game
