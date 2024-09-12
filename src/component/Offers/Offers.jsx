import React from 'react';
import exclusive_image from '../../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='bg-custom-gradient min-h-screen flex flex-col px-[20px] mb-[50px] m-[auto] lg:w-[70%] lg:h-[60vh] md:flex-row md:px-[140px] md:w-[100%] md:h-[30vh]'>
      <div className='flex-1 flex flex-col justify-center text-center md:text-left'>
        <h1 className='text-[#171717] lg:text-[50px] font-[600] m-0 md:text-[40px] sm: text-[30px]'>Exclusive</h1>
        <h1 className='text-[#171717] lg:text-[40px] font-[600] m-0 md:text-[35px] sm: text-[25px]'>Offers for you</h1>
        <p className='text-[#171717] text-[16px] font-[600] mt-[20px] sm:text-[14px]'>ONLY ON BEST SELLERS PRODUCT</p>
        <button className='w-[150px] h-[40px] rounded-full border-none text-white text-[16px] font-[600] mt-[20px] cursor-pointer bg-[#ff4141] sm:w-[120px] sm:h-[35px] sm:text-[14px] sm: ml-28 lg:ml-24'>Check now</button>
      </div>
      <div className='flex-1 flex items-center justify-center pt-[20px] sm:relative sm:pt-0'>
        <img src={exclusive_image} className='lg:w-[70%] md:w-[80%] sm: w-[100%] relative bottom-auto left-auto' />
      </div>
    </div>
  );
}

export default Offers;
