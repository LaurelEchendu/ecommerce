import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='w-[350px] hover:scale-105 transition-all duration-500'>
      <Link to={`/product/${props.id}`}>
      <img src={props.image} className='w-[500px] h-[363px]'/></Link>
      <p className='mt-1.5 mb-1.5 mx-0'>{props.title}</p>
      <div className='flex gap-[20px] md:mb-[30px]'>
        <div className='text-[#374151] text-[18px] font-[600] mt-[20px]'>
           ${props.price} 
        </div>
        <div className='text-[#8c8c8c] text-[18px] font-[500] line-through mt-[20px]'>
           ${props.description}
        </div>
      </div>
    </div>
  )
}

export default Item
