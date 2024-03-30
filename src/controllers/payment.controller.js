import axios from 'axios'
import {
	PAYPAL_API,
	PAYPAL_API_CLIENT,
	PAYPAL_API_SECRET,
	HOST,
	PORT,
} from '../config'

export const createOrder = async (req, res) => {
	try {
		const order = {
			intent: 'CAPTURE',
			purchase_units: [
				{
					amount: {
						currency_code: 'USD',
						value: '10',
					},
					description: 'MTG Arena Premier Championship Ticket',
				},
			],
			application_context: {
				brand_name: 'magicthegathering',
				landing_page: 'LOGIN',
				user_action: 'PAY_NOW',
				return_url: `http://${HOST}:${PORT}/capture-order`,
				cancel_url: `http://${HOST}:${PORT}/cancel-order`,
			},
		}

		const params = new URLSearchParams()
		params.append('grant_type', 'client_credentials')

		const {
			data: { access_token },
		} = await axios.post(
			'https://api-m.sandbox.paypal.com/v1/oauth2/token',
			params,
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				auth: {
					username: PAYPAL_API_CLIENT,
					password: PAYPAL_API_SECRET,
				},
			}
		)

		const response = await axios.post(
			`${PAYPAL_API}/v2/checkout/orders`,
			order,
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		)
		res.status(200).json(response.data)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

export const captureOrder = async (req, res) => {
	try {
		const { token } = req.query
		await axios.post(
			`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
			{},
			{
				auth: {
					username: PAYPAL_API_CLIENT,
					password: PAYPAL_API_SECRET,
				},
			}
		)
		res.redirect('/payment.html')
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

export const cancelOrder = (req, res) => {
	res.redirect('/')
}
