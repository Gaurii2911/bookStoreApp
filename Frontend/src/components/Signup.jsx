import React from 'react'
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom"
import Login from "./Login";
import { useForm } from "react-hook-form"
import { use } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
function Signup() {
  const location =useLocation();
  const navigate=useNavigate();
  const from=location.state?.from.pathname || "/";
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
    const onSubmit = async(data) =>{
      const userInfo={
        fullname : data.fullname,
        email: data.email,
        password: data.password
      }
      await axios.post("http://localhost:3000/user/signup",userInfo).then((res)=>{
        console.log(res.data);

        if(res.data){
         toast.success("Sucessfully created!");
       navigate(from, {replace:true});
        }localStorage.setItem("Users",JSON.stringify(res.data.user))
      }).catch((err)=>{
       if(err.response)
        { toast.error('This is an error!');
     } });
    };
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
    <h3 className="font-bold text-lg ">Signup</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div  className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text"
         placeholder="Enter Your Full Name"
         className="w-80 px-3 py-1 border rounded-md outline-none" 
                   {...register("fullname", { required: true })}/>
          <br />
           {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
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
        <span>Password</span>
        <br/>
        <input type="text"
         placeholder="Enter Your password"
         className="w-80 px-3 py-1 border rounded-md outline-none"
                   {...register("password", { required: true })}/>
          <br />
           {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 flex justify-around'>
        <button className ="bg-pink-400 rounded-lg  text-white border-solid w-15 py-1 hover:bg-pink-700 duration-200 cursor-pointer">Submit</button>
        <p>Have Account? {" "}
        <button
        className='underline text-blue-500 cursor-pointer' 
        onClick={
            ()=>document.getElementById("my_modal_3").showModal()
        }>
        SignIn
        </button>{" "}
        <Login/>
        </p>
    </div>
    </form>
  </div>
  
</div>

  </div>
    </>
  )
}

export default Signup
