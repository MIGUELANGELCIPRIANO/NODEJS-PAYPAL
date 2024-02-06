import { Router } from 'express'
import {
	paymentRequest,
	paymentCompleted,
	paymentCanceled,
} from '../controllers/payment.controller'

const router = Router()

router.get('/payment-request', paymentRequest)

router.get('/payment-completed', paymentCompleted)

router.get('/payment-canceled', paymentCanceled)

export default router
