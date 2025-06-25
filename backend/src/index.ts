import express, { NextFunction, Request, Response } from 'express'
import { createRound, getChoices, getComputersChoice } from './handlers/handlers'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

const allowedCors = ['http://localhost:5173']

app.use(function (req: Request, res: Response, next: NextFunction) {
  const { origin } = req.headers
  if (allowedCors.includes(origin || '')) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET,POST')
  }
  next()
})

app.get('/choices', getChoices)
app.get('/choice', getComputersChoice)
app.post('/play', createRound)

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).send({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
