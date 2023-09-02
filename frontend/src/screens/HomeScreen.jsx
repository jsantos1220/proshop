import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../assets/products'
import Product from '../components/Product'
import axios from 'axios'

export default function HomeScreen() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProductos = async () => {
			const response = await fetch('/api/products/')
			const result = await response.json()

			setProducts(result)
		}

		fetchProductos()
	}, [])

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col
						className='py-3'
						sm={12}
						md={6}
						lg={4}
						xl={4}
						key={product.name}
					>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}
