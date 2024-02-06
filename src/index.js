import express from 'express'
import paymentRoutes from './routes/payment.routes'
import morgan from 'morgan'
import { PORT } from './config'
import path from 'path'

const app = express()

app.use(morgan('dev'))
app.use(paymentRoutes)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT)
console.log('Server listening on port', PORT)
