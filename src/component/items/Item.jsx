import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'

const Item = (props) => {


  return (
    <div className='w-[350px] hover:scale-105 transition-all duration-500'>
      <Link to={`/product/${props.id}`}>
      <img src={props.image} className='lg:w-[500px] lg:h-[363px] lg:object-contain md:w-]300px] md:h-[289px] md:object-contain sm: w-[200px] h-[150px] object-contain pr-7'/></Link>
      <p className='mt-1.5 mb-1.5 mx-0'>{props.title}</p>
      <div className='flex gap-[20px] md:ml-14'>
        <div className='text-[#374151] text-[18px] font-[600] mt-[20px] lg:ml-20 sm: ml-6'>
           ${props.price} 
        </div>
        <div className='text-[#8c8c8c] text-[18px] font-[500] line-through mt-[20px]'>
           ${props.description}
        </div>
    </div>
        <span className='flex items-center relative mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px] md:mb-[30px] md:ml-14 sm: pl-4'>
          <img src={ star_icon} />
          <img src={ star_icon} />
          <img src={ star_icon} />
          <img src={ star_icon} />
          <img src={ star_dull_icon} />
          <p>(122)</p>
        </span>
      </div>
  )
} 

export default Item
