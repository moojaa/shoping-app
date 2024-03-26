import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './page/Products';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate,setAuthenticate]= useState(false)
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/products/:id' element={<PrivateRoute authenticate={authenticate}/>} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
