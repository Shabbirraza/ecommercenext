import React from 'react'

const AddProduct = () => {
    return (
        <>
            <h1 className='text-9xl text-blue-950 font-extrabold text-center  '>Add Product</h1>
            <div className='w-screen flex items-center justify-center my-5 '>
                <div className='w-[40%] flex flex-col items-center justify-center bg-blue-300 h-[400px]'>
                    <label htmlFor='productName ' className='w-[80%] text-3xl '>
                        ProductName
                        <input className=' w-full h-[40px] m-2 bg-blue-100 outline-none text-3xl px-2 py-4  my-4' placeholder='productName' name='productName' id='productName' type='productName' />
                    </label>
                    <input className='w-[80%] h-[40px] m-2 bg-blue-100 outline-none text-3xl px-2 py-4  my-4' placeholder='email' name='email' id='email' type='email' />
                    <input className='w-[80%] h-[40px] m-2 bg-blue-100 outline-none text-3xl px-2 py-4 my-4' placeholder='password' name='password' id='password' type='password' />
                    <button className='bg-blue-900 w-[80%] p-2 cursor-pointer border-blue-100 py-4 my-4 '>Signup</button>
                </div>


            </div>

        </>
    )
}

export default AddProduct