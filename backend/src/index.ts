import express, { Request, Response } from 'express'
import { Choices } from './constants/choices'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

function getChoices(_req: Request, res: Response) {
  res.json(Choices)
}

app.get('/choices', getChoices)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
