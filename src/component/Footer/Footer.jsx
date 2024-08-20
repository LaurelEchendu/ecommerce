import React from 'react'
import logo from '../../assets/logo.png'
import { BsTwitterX } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className='flex items-center justify-center  md:gap-[5px]'>
        <img src={logo}/>
        <p className='text-[#171717] lg:text-3xl font-[600] md:text-[15px] my-10'>SHOPPER</p>
      </div>
        
      <hr className='h-[3px] rounded-md bg-[black]'/>
      <footer className='flex items-center justify-between p-[30px] text-[#282828] lg:text-[17px] md:justify-between hover:text-[#515151] md:text-[11px]'>
        <div className='flex lg:space-x-9 lg:pl-[140px] md:space-x-2 md:ml-8'>
          <span className='cursor-pointer hover:text-[#a3a1a1]'>About Us</span>
          <span className='cursor-pointer hover:text-[#a3a1a1]'>Blog</span>
          <span className='cursor-pointer hover:text-[#a3a1a1] '>FAQs</span>
          <span className='cursor-pointer hover:text-[#a3a1a1]'>Order tracking</span>
          <span className='cursor-pointer hover:text-[#a3a1a1]'>Contact</span>
          <span className='cursor-pointer hover:text-[#a3a1a1]'>© By Laurelechendu</span>
        </div>
        <div className='flex text-end text-[#282828] lg:space-x-6 lg:pl-[140px] pr-[200px] md:space-x-1 md:ml-[50px]'>
          <LuFacebook className='cursor-pointer hover:text-[#a3a1a1]'/>
          <SiInstagram className='cursor-pointer hover:text-[#a3a1a1]'/>
          <BsTwitterX className='cursor-pointer hover:text-[#a3a1a1]'/>
            
        
        </div>
      </footer>
    </div>
  )
}

export default Footer
