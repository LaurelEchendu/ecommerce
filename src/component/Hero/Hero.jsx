import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import hand_icon from '../../assets/hand_icon.png'
// import hero_image from '../../assets/hero_image.png'

const Hero = () => {
  const images=[
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
  ]

  const [ index, setIndex ] = useState(0);

  const  handleNextImg=()=>{
    setIndex((prev) => (prev+1) % images.length)
  };
  useEffect(() =>{
    const intervalid = setInterval(handleNextImg, 8000);

    return()=> clearInterval(intervalid);
  }, [])
  return (
    <div className='lg:flex lg:h-[100vh] lg:bg-custom-gradient lg:min-h-screen lg:font-instrument md:flex md:bg-custom-gradient  md:font-poppins sm: flex bg-custom-gradient min-h-[50vh] sm: font-poppins'>
      <div className=' lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:gap-[10px] lg:pl-[180px] md:flex-1 md:flex md:flex-col md:justify-center md:gap-[10px] md:pl-[80px] sm: flex-col flex justify-center pl-[20px] overflow-hidden mt-[50px]'>
        <h2 className='text-[#090909] lg:text-[20px] lg:mt-[50px] lg:font-[600] md:text-[20px] md:font-[600] sm: mt-[20px] text-[20px] font-[700] mb-[30px]' style={{margin:0, padding:0, boxSizing: 'border-box',}}>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='flex items-center lg:gap-[20px] md:gap-[20px] sm:flex sm:items-center gap-[15px] mb-[20px]'>
                <p className='text-[#171717] font-[600] lg:text-[100px] md:text-[100px] sm: text-[50px]'  style={{margin:0, padding:0, boxSizing: 'border-box',}}>new</p>
                <img src={hand_icon} className='lg:w-[105px] md:w-[50px] sm: w-12' style={{margin:0, padding:0, boxSizing: 'border-box',}}/>
            </div>
            <p className='text-[#171717] font-[600] lg:text-[80px] md:text-[40px] sm: text-[20px] mb-[5px]'style={{margin:0, padding:0, boxSizing: 'border-box',}}>collections</p>
            <p className='text-[#171717] font-[600] lg:text-[80px] md:text-[40px] sm: text-[20px]' style={{margin:0, padding:0, boxSizing: 'border-box',}}>for everyone</p>
        </div>
        <div>
        <button className=' rounded-full border-none text-white mt-[30px] cursor-pointer bg-[#ff4141] font-[600] lg:w-[400px] lg:h-[70px] lg:text-[32px] md:w-[222px] md:h-[50px] md:text-[22px] sm: text-[12px] w-[130px] h-[30px]'><Link to={'/women'}>Latest collection</Link></button>
        </div>
      </div>
      <div className='bg-white rounded-full lg:w-96 lg:flex-1 lg:flex lg:items-center lg:justify-center lg:mt-[50px] mr-[50px] md:flex-1 md:flex md:items-center md:justify-center md:mr-[50px] md:mt-0 sm: flex-1 flex items-center justify-center '>
        <img src={images[index]} key={index} className='bg-none lg:w-96 md:w-60 sm:w-40 object-contain'/>
      </div>
    </div>
  )
}

export default Hero