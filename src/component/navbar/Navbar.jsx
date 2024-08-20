import React, { useContext, useState } from 'react'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
    const {cartCount} = useContext(ShopContext)
    const [menu , setMenu]= useState('shop')


  return (
    <nav className='flex justify-around p-[16px] shadow-md sticky z-10 top-0 opacity-99 bg-white'>
        <div className='flex items-center lg:gap-[10px] md:gap-[5px]'>
            <img src={logo}/>
            <p className='text-[#171717] lg:text-[38px] font-[600] md:text-[15px]'>SHOPPER</p>
        </div>
        <ul className='flex items-center gap-[50px] lg:font-[500] text-[#626262] lg:text-[16px] md:text-[10px] md:font-[500] font-poppins'>
            <li 
                className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' 
                onClick={()=>{setMenu('shop')}}>
                <Link to={'/'}>Shop</Link>{menu==='shop'?<hr className='border-none w-[80%] h-[3px] rounded bg-[#FF4141]'/>:<></>}
            </li>
            <li 
               className='flex flex-col items-center justify-center gap-[3px] cursor-pointer'
               onClick={()=>{setMenu('mens')}}>
               <Link to={'/Men'}>Men</Link>{menu==='mens'?<hr className='border-none w-[80%] h-[3px] rounded bg-[#FF4141]'/>:<></>}
            </li>
            <li 
               className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' 
               onClick={()=>{setMenu('womens')}}>
               <Link to={'/Women'}>Women</Link>{menu==='womens'?<hr className='border-none w-[80%] h-[3px] rounded bg-[#FF4141]'/>:<></>}
            </li>
            <li 
              className='flex flex-col items-center justify-center gap-[3px] cursor-pointer' 
              onClick={()=>{setMenu('jewelery')}}>
              <Link to={'/Jewelery'}>Jewelery</Link>{menu==='jewelery'?<hr className='border-none w-[80%] h-[3px] rounded bg-[#FF4141]'/>:<></>}
            </li>
        </ul>
        <div className='flex items-center gap-[45px]'>
            <button 
              className='w-[100px] h-[48px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-lg font-[500] bg-white cursor-pointer scale-75 hover:bg-[#fcf7f7] '>
              <Link to={'/Login'}>Login</Link>
            </button>
            <Link to={'/Cart'}><img src={cart_icon}/></Link>
            <div className='w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-md font-semibold bg-red-600 text-white'>{cartCount}</div>
        </div>
    </nav>
  )
}

export default Navbar