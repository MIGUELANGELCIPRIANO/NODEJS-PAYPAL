# NODEJS-PAYPAL

<img width="50%" src="https://i.postimg.cc/9F50SXZh/NODEJS-PAYPAL-REST-API.png" />

## INTRODUCTION

In this project we will create a **Node.js** application integrating the **Paypal** payment method through its REST API service for developers.
We will create a business account and a user account to make a payment order, capture it and cancel it if we want.

## TECHNOLOGIES

- Node.js
- Express.js
- Babel

## INSTALLATION

1. Install the recommended version for most users of **Node.js** from the following link.

https://nodejs.org/en

2. Execute the command from the terminal located at ./NODEJS-PAYPAL.

```shell
npm i
```

3. Create a **PayPal** account through the following link.

https://www.paypal.com/ar/webapps/mpp/business

4. Login with your account through the following link.

https://developer.paypal.com/home

5. Make sure you are in "Sandbox mode".

<br />

<img width="50%" src="https://i.postimg.cc/fbN224CY/DEVELOPER-PAYPAL-HOME.png" />

<br />

6. Go to "Testing Tools" => "Sandbox Accounts" => "Create Account" => "Create". 

<br />

<img width="50%" src="https://i.postimg.cc/FRK2p5FD/SANDBOX-ACCOUNT.png" />

<br />

7. Create an account of type "Business (Merchant account)" assigning it a fictitious country, email and password.
8. Go to "Apps & Credentials" => "Create App".

<br />

<img width="50%" src="https://i.postimg.cc/2y8DLbM9/APP-ACCOUNT.png" />

<br />

9. Create an account of type "Merchant (Accept payments as merchant (seller))" by assigning it a name and the Sandbox account created earlier.
10. Create an .env file inside ./NODEJS-PAYPAL and replace `Client ID` and `Secret key` with the API credentials.

```js
PAYPAL_API = 'https://api-m.sandbox.paypal.com'
PAYPAL_API_CLIENT = 'Client ID'
PAYPAL_API_SECRET = 'Secret key'
HOST = localhost
PORT = 3000
```

<img width="50%" src="https://i.postimg.cc/cJL18z3B/API-CREDENTIALS.png" />

<br />

11. Go again to "Testing Tools" => "Sandbox Accounts" => "Create account" => "Create".
12. Create an account of type "Personal (Busher account)" assigning it a fictitious country, email, password, first name, last name and paypal balance.
13. In the payment.controller.js file located in the controllers folder replace the `country currency code`, `price`, `description` and `sandbox account name` values of the "createOrder" function with those of your created sandbox account.

```js
purchase_units: [
	{
		amount: {
			currency_code: 'country currency code',
			value: 'price',
		},
		description: 'description',
	},
],
application_context: {
	brand_name: 'sandbox account name',
	landing_page: 'LOGIN',
	user_action: 'PAY_NOW',
	return_url: `http://${HOST}:${PORT}/capture-order`,
	cancel_url: `http://${HOST}:${PORT}/cancel-order`,
}
```

## EXECUTION

14. Use the **npm** package manager to run.
15. Execute the command from the terminal located at ./NODEJS-PAYPAL.

```shell
npm run dev
```

16. Make a POST request through an app or extension of testing API's, such as Postman or Thunder Client.
17. Select the Auth => Basic tab and insert in the Username and Password fields the API credentials, `Client ID` and `Secret key`.

<br />

<img width="50%" src="" />

<br />

18. Select the Body => Form-encode tab and insert in the Key and Value fields, "grant_type" and "client_credentials".

<br />

<img width="50%" src="" />

<br />

19. Send the request to the URL.

http://localhost:3000/create-order

20. Once you have made your purchase through the site you can verify the transactions by logging in with your Personal and Business accounts from the following link.

https://www.sandbox.paypal.com/signin

21. Modify the .html and .css files located in the public folder for the new page layout.
