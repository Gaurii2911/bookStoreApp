import React from 'react'
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"

function Contact() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className='flex h-screen items-center justify-center '>
    <div id="my_modal" className="relative border-[0.5px] shadow-lg p-5 rounded-md">
  <div className="">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
    </form>
    <h3 className="font-bold text-lg ">Contact Us</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div  className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text"
         placeholder="Enter Your Full Name"
         className="w-80 px-3 py-1 border rounded-md outline-none" 
                   {...register("name", { required: true })}/>
          <br />
           {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div  className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email"
         placeholder="Enter Your Email"
         className="w-80 px-3 py-1 border rounded-md outline-none"
           {...register("email", { required: true })}/>
          <br/>
           {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
     <div  className='mt-4 space-y-2'>
        <span>Message</span>
        <br/>
        <input type="text"
         placeholder="Type Your message"
         className="w-80 h-20 border rounded-md outline-none px-3 py-1 "
                 />
         
    </div>
    <Link to="/" className='mt-4 flex justify-around'>
        <button className ="bg-pink-400 rounded-lg  text-white border-solid w-15 py-1 hover:bg-pink-700 duration-200 cursor-pointer">Submit</button>
       
    </Link>
    </form>
  </div>
  
</div>

  </div>
    </>
  )
}

export default Contact
