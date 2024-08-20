import React from 'react'
import { Link } from 'react-router-dom'
import hand_icon from '../../assets/hand_icon.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='flex h-[100vh] bg-custom-gradient min-h-screen font-instrument '>
      <div className=' flex-1 flex flex-col justify-center gap-[20px] lg:pl-[180px] md:gap-[10px] md:pl-[80px]'>
        <h2 className='text-[#090909] font-[36px], font-[600] md:-[20px]'>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='flex items-center gap-[20px]'>
                <p className='text-[#171717] font-[600] text-[150px] md:text-[50px]'>new</p>
                <img src={hand_icon} className='w-[105px]'/>
            </div>
            <p className='text-[#171717] text-[150px] font-[600] md:text-[40px]'>collections</p>
            <p className='text-[#171717] text-[150px] font-[600] md:text-[40px]'>for everyone</p>
        </div>
        <div>
        <button className='w-[222px] h-[50px] rounded-full border-none text-white text-[22px] font-[600] mt-[30px] cursor-pointer bg-[#ff4141]'><Link to={'/women'}>Latest collection</Link></button>
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center lg:mt-[50px] mr-[50px] md:mt-0'>
        <img src={hero_image}/>
      </div>
    </div>
  )
}

export default Hero
