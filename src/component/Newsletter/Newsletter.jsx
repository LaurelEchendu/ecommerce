import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-[65%] h-[50vh] flex flex-col items-center justify-center m-[auto]  mb-[150px] px-[140px] gap-[30px] bg-custom-gradient md:h-[fit-content]'>
      <h1 className='text-[#454545] text-[55px] font-[600] lg:mt-[40px] md:text-[30px]'>Get Exclusive Offers on Your Email</h1>
      <p className='text-[#454545] text-[20px] font-[600] m-0 md:text-[20px]'>Subscribe to our newsletter and stay updated</p>
      <div className='flex items-center justify-between bg-[#e3e3e3] w-[730px] h-[50px] rounded-full border-1 border-[#e3e3e3] md:w-[500px]'>
        <input type="email" placeholder='Your Email Address' className='lg:w-[500px] ml-[30px] border-none outline-none text-[#616161] font-poppins text-[16px] bg-[#e3e3e3] md:px-[50px]'/>
        <button className='w-[222px] h-[50px] rounded-full border-none text-white text-[16px] font-[600] cursor-pointer bg-black'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
