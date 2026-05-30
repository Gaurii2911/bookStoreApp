import React from 'react'
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
 
  const navigate = useNavigate();
    const onSubmit = async(data) =>{
      const userInfo={
     
        email: data.email,
        password: data.password
      }
      await axios.post("http://localhost:3000/user/login",userInfo).then((res)=>{
        console.log(res.data);

        if(res.data){
          toast.success('Successfully signed In!');
          document.getElementById("my_modal_3").close();
          setTimeout(()=>{
           
            window.location.reload();
             localStorage.setItem("Users",JSON.stringify(res.data))
          },1000);
         
         
        }
       
      }).catch((err)=>{
          console.log(err);
         toast.error('This is an error!');
         setTimeout(()=>{},2000);
      });
    };
  return (
  <>
  <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
   <button
  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
  onClick={() => {
    document.getElementById('my_modal_3').close();
    navigate("/");
  }}
>
  ✕
</button> </form>
    <h3 className="font-bold text-lg ">Login</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div  className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email"
         placeholder="Enter Your email"
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
        <button type="submit" className ="bg-pink-400 rounded-lg  text-white border-solid w-15 py-1 hover:bg-pink-700 duration-200 cursor-pointer">Login</button>
        
        <p>Not registered yet ? 
        <Link to="/signup"
        className='underline text-blue-500 cursor-pointer' >
        Signup
        </Link>
        </p>

    </div>
    </form>
  </div>
</dialog>
  </div>
  </>
  )
}

export default Login
