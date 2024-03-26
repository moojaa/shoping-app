import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const goPage = ()=>{
    navigate(`/products/${item.id}`)
  }
  return (
    <div>
      <div className='card-section' onClick={goPage}>
        <img className='card-img' src={item.img}/>
        <div>{item.choice? 'Conscious choice' : ''}</div>
        <div>{item.title}</div>
        <div>￦{item.price}</div>
        <div>{item.new? '신제품':''}</div>
      </div>
    </div>
  )
}

export default ProductCard
