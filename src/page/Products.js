
import React, { useEffect} from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const productList = useSelector(state=>state.product.productList)
  // const [productList, setProductList] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams()
  const dispatch = useDispatch()

  const callProducts = () => {
    let searchQuery = query.get('q') || ''
    dispatch(productAction.callProducts(searchQuery))
    // let url = `https://my-json-server.typicode.com/moojaa/shoping-app/products?q=${searchQuery}`
    // let response = await fetch(url)
    // let data = await response.json()
    // setProductList(data)
  }
  
  useEffect(() => {
    callProducts()
     // eslint-disable-next-line
  }, [query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map(item => <Col md={6} lg={4} xl={3} className="d-flex justify-content-center"><ProductCard item={item} /></Col>)}
        </Row>
      </Container>

    </div>
  )
}

export default Products
