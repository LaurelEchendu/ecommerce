import React from 'react'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, LoginSignup, Product, Shop, ShopCategory } from './pages'
import Footer from './component/Footer/Footer'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
// import kids_banner from './assets/banner_kids.png'

const App = () => {
  return (
    <div className='m-0 p-0 box-border font-poppins'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<ShopCategory banner={men_banner} category="men's clothing"/>}/>
        <Route path='/Women' element={<ShopCategory banner={women_banner} category="women's clothing"/>}/>
        <Route path='/Jewelery' element={<ShopCategory category="jewelery"/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
