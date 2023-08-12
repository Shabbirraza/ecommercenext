import React from 'react'
import Link from 'next/link' 
const Login = () => {
  return (
    <>
    <h1 className='text-8xl text-black text-center '>
       Login
    </h1>
    <div className='w-screen flex items-center justify-center my-5 '>
        <div className='w-[40%] flex flex-col items-center justify-center bg-blue-300 p-20'>
       
            <input className='w-[80%] h-[40px] m-2 bg-blue-100 outline-none text-3xl px-2 py-4  my-4' required placeholder='email' name='email' id='email' type='email' />
            <input className='w-[80%] h-[40px] m-2 bg-blue-100 outline-none text-3xl px-2 py-4 my-4' required placeholder='password' name='password' id='password' type='password' />
            <button className='bg-blue-900 w-[80%] p-2 cursor-pointer border-blue-100 py-4 my-4 '>Login</button>
            <span>Don't Have an account? <Link href='/SignUp'  className='font-semibold'>Signup</Link></span>
        </div>
     

    </div>

</>
  )
}

export default Login