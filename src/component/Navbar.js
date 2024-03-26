import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = ({authenticate,setAuthenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']
  const navigate = useNavigate()
  const goPage = (page)=>{
    navigate(`/${page}`)
  }
  const search=(event)=>{
    if(event.key === "Enter"){
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
      console.log(keyword)
    }
    
  }

  return (
    <div>
      <div className='login-section'>
        <div className='login-box' onClick={authenticate? ()=>setAuthenticate(false):()=>goPage('login')}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className='logo-section'>
        <img onClick={()=>goPage('')} className='logo-img' src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg' />
      </div>
      <div className='menu-section'>
        {menuList.map(item => <li>{item}</li>)}
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input className='search-area' type='text' placeholder='제품검색' onKeyDown={(event)=>search(event)} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
