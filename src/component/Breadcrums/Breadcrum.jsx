import React from 'react'
import arrow_icon from '../../assets/breadcrum_arrow.png'
import { Product } from '../../pages';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex my-[50px] mx-[60px] justify-center items-center font-[600] gap-[8px] text[#5e5e5e] text-[16px]'>
      HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon}/> {Product.category} <img src={arrow_icon}/>{product.title}
    </div>
  )
}

export default Breadcrum
