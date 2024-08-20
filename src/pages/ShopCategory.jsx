import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../component/items/Item'
import NewCollection from '../component/New collections/NewCollection'
import remove_icon from '../assets/cart_cross_icon.png'

const ShopCategory = (props) => {
  const { data } = useContext(ShopContext);
  const [showNewCollection, setShowNewCollection] = useState(false);

  const handleClick = () => {
    setShowNewCollection(true);
  };
  const handleClose =()=>{
    setShowNewCollection(false)
  }

  return (
    <div className='flex flex-col items-center gap-[30px] mb-[10px] lg:mt-[10px] md:gap-[5px] mt-0 md:h-[fit-content]'>
      <img src={props.banner} className='block my-[30px] mx-auto w-[82%]'/>
      <div className='flex mx-[70px] justify-between items-center md:block '>
        <p className=' text-center font-[600] '>
          <span className='font-[600] text-center'>Showing 1-12</span> out of 36 products
        </p>
        <div className='flex justify-center items-center py-[10px] px-[20px] rounded-none border-2 border-[#888] text-center mb-3'> 
          Sort by <img src={dropdown_icon }/>
        </div>
        <div>
          <div className='lg:grid lg:grid-cols-2 lg:mt-[50px] lg:gap-[200px] md:pl-[50px] md:gap-[20px] mt-[50px]'>
            {data.map((item, i)=>{
             if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.title} image={item.image} price={item.price} rating={item.rating[0]}/>
             }
            
             else{
              return null;
             }
            })}
          </div>
          <div className='flex justify-center items-center my-[90px] mx-auto w-[233px] rounded-full bg-[#ededed] text-[#787878] font-[500] text-[18px]'>
            <button className='px-[200px] py-5' onClick={handleClick}>ExploreMore</button>
          </div>
        </div>
      </div>
      <div>
        <img src={remove_icon} className='absolute ml-[900px] mb-[50px] border-2 border-[#525252]'onClick={handleClose}/>
        {showNewCollection && <NewCollection heading='RELATED PRODUCTS'/>}
      </div>
    </div>
  )
}

export default ShopCategory