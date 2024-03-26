import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const Detail = () => {
  let { id } = useParams()
  const [detailList, setDetailList] = useState([])
  const [sizeSelect, setSizeSelect] = useState(null)
  const getDetail = async () => {
    let url = `https://my-json-server.typicode.com/moojaa/dbstudy/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setDetailList(data)
  }
  const sizeChoice = (size) => {
    setSizeSelect(size)
  }
  useEffect(() => {
    getDetail()
  }, [])
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}><img src={detailList?.img} /></Col>
          <Col xs={6} className='interval'>
            <h3>{detailList?.title}</h3>
            <h4>￦{detailList?.price}</h4>
            <h5>{detailList?.choice ? "Conscious choice" : ""}</h5>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                {sizeSelect ? sizeSelect : "사이즈선택"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {detailList?.size?.map((size => (<Dropdown.Item onClick={() => sizeChoice(size)}>{size}</Dropdown.Item>)))}
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-grid gap-2">
              <Button variant="dark" size="lg">
                추가
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Detail
