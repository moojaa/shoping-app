import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react'

const NavbarArea = ({ authenticate, setAuthenticate }) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']
  const navigate = useNavigate()
  const goPage = (page) => {
    navigate(`/${page}`)
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
      console.log(keyword)
    }

  }

  return (
    <div>
      <Navbar key="lg" expand="lg">
        <div className='d-flex w-100 justify-content-between justify-content-lg-end p-3'>
          <Button variant="outline-" className="d-lg-none" onClick={handleShow}><FontAwesomeIcon icon={faBars} /></Button>
          <div className='login-box' onClick={authenticate ? () => setAuthenticate(false) : () => goPage('login')}>
            <FontAwesomeIcon className='me-1' icon={faUser} />
            <div>{authenticate ? "로그아웃" : "로그인"}</div>
          </div>
        </div>
      </Navbar>
      <div className='logo-section'>
        <img onClick={() => goPage('')} className='logo-img' src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg' alt='logo' />
      </div>
      <div className='menu-section d-none d-lg-flex'>
        <Offcanvas
          show={show}
          onHide={handleClose}
          responsive="lg"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex">
            <div className="d-flex flex-column flex-lg-row canvas-style" >
              {menuList.map(item => <li className='p-1 canvas-menu-style'>{item}</li>)}
            </div>
            <div className='search-box '>
              <FontAwesomeIcon icon={faSearch} />
              <input className='search-area' type='text' placeholder='제품검색' onKeyDown={(event) => search(event)} />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  )
}

export default NavbarArea
