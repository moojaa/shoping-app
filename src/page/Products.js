
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const Products = () => {
  const [productList, setProductList] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams()
  const callProducts = async () => {
    let searchQuery = query.get('q') || ''
    let url = `https://my-json-server.typicode.com/moojaa/shoping-app/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }
  useEffect(() => {
    callProducts()
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
