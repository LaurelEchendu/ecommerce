import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItem = () => {

    const {data, cartItem, removeFromCart}= useContext(ShopContext)
  return (
    <div className='mx-[100px] my-[170px]'>
        <div className='grid grid-cols-5 gap-[75px] px-[20px] text-[#454545] text-[18px] font-[600] mb-[30px]'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e2e2e2]'/>
        {data.map((item)=>{
            if(cartItem[item.id]>0){
                return <div>
                <div className='grid grid-cols-5 gap-[75px] px-[20px] text-[#454545] text-[18px] font-[600] '>
                    <img src={item.image} className='h-[62px]'/>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <button className='w-[64px] h-[50px] border-2 bg-[#fff]'>{cartItem[item.id]}</button>
                    <img src={remove_icon} onClick={()=>{removeFromCart(item.id)}} className='w-[15px] my-[40px] cursor-pointer'/>
                </div>
                <hr />
            </div>
            }
            else{
                null
            }
        })}
    </div>
  )
}

export default CartItem
