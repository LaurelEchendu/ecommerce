import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';

const CartItem = () => {
  const { data, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className='lg:mx-[100px] lg:my-[170px] md:mx-[100px] md:my-[170px] sm:mx-[20px] my-[50px]'>
      <div className='lg:grid lg:grid-cols-5 lg:gap-[75px] lg:px-[20px] lg:text-[#454545] lg:text-[18px] lg:font-[600] md:grid md:grid-cols-5 md:gap-[75px] md:px-[20px] md:text-[#454545] md:text-[18px] md:font-[600] sm: grid grid-cols-5 gap-[10px] px-[10px] text-[#454545] text-[8px] font-[500] mb-[20px]'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr className='lg:h-[3px] lg:bg-[#e2e2e2] md:h-[3px] md:bg-[#e2e2e2] sm:h-[2px] bg-[#d2d2d2]'/>
      {data.map((item) => {
        if (cartItem[item.id] > 0) {
          return (
            <div>
              <div className='lg:grid lg:grid-cols-5 lg:gap-[75px] lg:px-[20px] lg:text-[#454545] lg:text-[18px] lg:font-[600] md:grid md:grid-cols-5 md:gap-[75px] md:px-[20px] md:text-[#454545] md:text-[18px] md:font-[600] sm: grid grid-cols-5 gap-[10px] px-[10px] text-[#454545] text-[16px] font-[500]'>
                <img src={item.image} className='lg:h-[62px] md:h-[62px] sm:h-[50px] w-[50px]' />
                <p>{item.title.slice(0, 15)}{item.title.length > 15 && '...'}</p>
                <p>${item.price}</p>
                <button className='lg:w-[64px] lg:h-[50px] lg:border-2 lg:bg-[#fff] md:w-[64px] md:h-[50px] md:border-2 md:bg-[#fff] sm:w-[50px] h-[40px] border bg-[#f9f9f9]'>{cartItem[item.id]}</button>
                <img src={remove_icon} onClick={() => { removeFromCart(item.id) }} className='lg:w-[15px] lg:my-[40px] md:w-[15px] md:my-[40px] sm:w-[12px] my-[20px] cursor-pointer' />
              </div>
              <hr className='sm:my-[10px]' />
            </div>
          );
        }
      })}
    
    </div>
  );
};

export default CartItem;
