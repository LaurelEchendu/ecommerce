import React, { useContext } from 'react';
import Item from '../items/Item';
import { ShopContext } from '../../context/ShopContext';

const Popular = () => {
  const { data } = useContext(ShopContext);

  const womenClothingItems = data.filter(item => item.category === "women's clothing");

  const itemsToDisplay = womenClothingItems.slice(0, 4);

  return (
    <div className='flex flex-col items-center gap-[10px] h-[90vh] mb-[150px] lg:mt-[100px] md:gap-[5px] mt-0 md:h-[fit-content]'>
      <h1 className='text-[#171717] text-[50px] font-[600] md:text-[50px]'>POPULAR IN WOMEN</h1>
      <hr className='w-[200px] h-[6px] rounded-md bg-[#252525]'/>
      <div className='lg:mt-[50px] lg:flex lg:gap-[30px] md:gap-[30px] mt-[50px]'>
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.title}
            image={item.image}
            price={item.price}
            description={item.rating.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
