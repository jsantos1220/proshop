import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../assets/products'
import { ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'

export default function ProductsScreen() {
	const { id: productId } = useParams()
	const product = products.find(p => p._id === productId)

	return (
		<>
			<Link to='/' className='btn btn-light my-3'>
				Back
			</Link>
			<Row>
				<Col md={5}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={4}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} Reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>Price ${product.price}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price: </Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status: </Col>
									<Col>
										<strong>
											{product.countInStock
												? 'In Stock'
												: 'Out of stock'}
										</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Button
										className='btn-block'
										type='button'
										disabled={product.countInStock === 0}
									>
										Add to Cart
									</Button>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}
