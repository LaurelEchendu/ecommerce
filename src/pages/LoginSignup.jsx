import React from 'react'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";



const LoginSignup = () => {
  const handleClick=()=>{
    return (
      'ok'
    )
  }
  const form = useForm()

  const { register , handleSubmit, control, formState: {errors},} = form;

  const onSubmit = data =>{
    console.log(data); 
  } 

  return (
    <div className='w-[100%] h-[130vh] bg-[#fce3fe] pt-[100px] mb-[50px]'>
      <div className='w-[700px] h-[720px] bg-white m-auto py-[40px] px-[60px]'>
        <h1 className='my-[20px]'>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-[30px] mt-[30px]'>
            <input 
            className='h-[70px] w-[100%] pl-[20px] border-2 border-[#c9c9c9] border-solid outline-none text-[#5c5c5c] text-[18px]' 
            type="text" 
            placeholder='Your full-name' {...register("fullName",
              {
                required:true,
                maxLength:{
                  value:20,
                  message:'must not exceed 20 characters'
                }
              }
            )}aria-invalid={errors.fullName ? "true" : "false"}/>
            {errors.fullName?.type === "required" && (
              <p role="alert" className='text-[#ff4141]'>Full name is required!</p>
            )}
            
            <input
            className='h-[70px] w-[100%] pl-[20px] border-2 border-[#c9c9c9] border-solid outline-none text-[#5c5c5c] text-[18px]' 
            type="email" 
            placeholder='Email Address' {...register("email", {required:true})} aria-invalid={errors.email ? "true" :"false"}/>
            {errors.email?.type ==="required" && (
              <p role='alert' className='text-[#ff4141]'>E-mail is required!</p>
            )}
  
            <input 
            className='h-[70px] w-[100%] pl-[20px] border-2 border-[#c9c9c9] border-solid outline-none text-[#5c5c5c] text-[18px]' 
            type="password" 
            placeholder='Password' {...register("password",
              {
                required:true,
                minLength:{
                  value:5,
                  message:'weak!!, try a stronger password, should not be less than 5 characters'
                },
                maxLength:{
                  value:12,
                  message:'must not exceed 12 charcters'
                }
              }
            )} aria-invalid={errors.password ? "true": "false"}/>
            {errors.email?.type==="required" && (
              <p role='alert' className='text-[#ff4141]'>Password is required!</p>
            )}

          </div>
          <input type='submit' className='w-[580px] h-[72px] text-white bg-[#ff4141] mt-[30px] text-[24px] font-[500] cursor-pointer hover:bg-[#f84d4d]'/>
          <p className='mt-[20px] text-[#5c5c5c] text-[18px] font-[500] '>Already have an account? <span className='text-[#ff4141] font-  [600 underline cursor-pointer ' onClick={handleClick}>Loginhere</span></p>
          <div className='flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-[500] '>
            <input type="checkbox" {...register("agreement",{required:true})} aria-invalid={errors.agreement ? "true": "false"}/>
            <p>By continuing i agree to the terms of use and privacy policy</p>
            {errors.agreement?.type==="required" && (
              <div><p role='alert' className='text-[#ff4141]'>Required!</p></div>
            )}
          </div>  
        </form>
      </div>  
      <DevTool control={control}/>
    </div>
  )
}

export default LoginSignup
