import styles from './button.module.css'

type Props = {
  caption: string
  onClick: () => void
  customStyles?: string
  disabled?: boolean
}

const Button: React.FC<Props> = ({ caption, onClick, customStyles, disabled }) => {
  return (
    <button className={`${styles.button} ${customStyles}`} onClick={onClick} disabled={disabled}>
      {caption}
    </button>
  )
}

export default Button
