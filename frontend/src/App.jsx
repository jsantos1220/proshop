import { useState } from 'react'
import './assets/css/estilos.scss'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
