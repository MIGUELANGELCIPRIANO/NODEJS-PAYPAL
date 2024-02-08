import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CheckOut from './components/CheckOut'
import CarriedOut from './components/CarriedOut'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<CheckOut />}></Route>
				<Route path='/carriedout' element={<CarriedOut/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
