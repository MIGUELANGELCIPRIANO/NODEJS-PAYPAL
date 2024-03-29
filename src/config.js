import { config } from 'dotenv'

config()

export const PAYPAL_API = process.env.PAYPAL_API
export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT
export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET
export const HOST = process.env.HOST
export const PORT = process.env.PORT
