import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='bg-custom-gradient min-h-screen flex px-[140px] mb-[50px] m-[auto] w-[85%] h-[60vh] md:h-[fit-content] '>
      <div className='flex-1 flex flex-col justify-center'>
        <h1 className='text-[#171717] text-[90px] font-[600] m-0 md:text-[50px]'>Exclusive</h1>
        <h1 className='text-[#171717] text-[75px] font-[600] m-0 md:text-[40px]'>Offers for you</h1>
        <p className='text-[#171717] text-[20px] font-[600] mt-[20px]'>ONLY ON BEST SELLERS PRODUCT</p>
        <button className='w-[222px] h-[50px] rounded-full border-none text-white text-[22px] font-[600] mt-[30px] cursor-pointer bg-[#ff4141]'>Check now</button>
      </div>
      <div className='flex-1 flex items-center justify-end pt-[50px] md:flex-1 md:flex md:items-center md:justify-end md:pt-[50px]'> 
        <img src={exclusive_image}/>
      </div>
    </div>
  )
}

export default Offers
