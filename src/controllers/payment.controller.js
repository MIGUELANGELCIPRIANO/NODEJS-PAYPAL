export const paymentRequest = (req, res) => {
	res.send('payment request')
}

export const paymentCompleted = (req, res) => {
	res.send('payment successfully completed')
}

export const paymentCanceled = (req, res) => {
	res.send('payment canceled')
}
