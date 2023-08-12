'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const SignUp = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [name, setName] = useState('')
    let [successMsg, setsuccessMsg] = useState('')
    let [errorMsg, setErrorMsg] = useState('')
    return (
        <>
            <h1 className='text-8xl text-black text-center '>
                Signup
            </h1>
            <div className='w-screen flex items-center justify-center my-5 '>
                <div className='w-[40%] flex flex-col items-center justify-center bg-blue-300 h-[400px]'>
                    <input className='w-[80%] h-[40px] m-2 bg-blue-100 outline-none text-3xl px-2 py-4  my-4' placeholder='name'
                        onChange={(e) => { setName(e.target.value) }} value={name}
                        name='name' id='name' type='text' />
                    <input className='w-[80%] h-[40px] m-2 bg-blue-100 outline-none text-3xl px-2 py-4  my-4'
                        onChange={(e) => { setEmail(e.target.value) }} value={email}
                        placeholder='email' name='email' id='email' type='email' />
                    <input className='w-[80%] h-[40px] m-2 bg-blue-100 outline-none text-3xl px-2 py-4 my-4'
                        onChange={(e) => { setPassword(e.target.value) }} value={password}
                        placeholder='password' name='password' id='password' type='password' />
                    <button className='bg-blue-900 w-[80%] p-2 cursor-pointer border-blue-100 py-4 my-4 '
                        onClick={() => {
                            console.log(name, password, email)
                        }}
                    >Signup</button>

                    <span>Already Have an account? <Link href='/Login' className='font-semibold'>Login</Link></span>
                </div>


            </div>

        </>
    )
}

export default SignUp