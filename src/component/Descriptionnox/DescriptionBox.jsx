import React from 'react'

const DescriptionBox = (props) => {

    const {product} = props;

  return (
    <div className='mx-[120px] mb-[170px]'>
      <div className='flex'>
        <div className='flex items-center justify-center text-[16px] font-[600] w-[170px] h-[70px] border-2 border-[#d0d0d0]'>Description</div>
        <div  className='flex items-center justify-center text-[16px] font-[600] w-[170px] h-[70px] border-2 border-[#d0d0d0] bg-[#FBFBFB] text-[#555]'>Reveiws (122)</div>
      </div>
      <div className='flex flex-col gap-[25px] border-2 p-[48px] pb-[70px]'>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default DescriptionBox
