import React from 'react'
import Cards from './Cards';

import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
         const res = await axios.get("http://localhost:3000/book");
         console.log(res.data);
         setBook(res.data);
      }catch(error){
           console.log(error);
      }
    }
    getBook();
  },[])
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4' >
    <div className='mt-28 items-center justify-center text-center '>
    <h1 className='text-2xl font-bold md: text-4xl'>We are delighted to have you <span className='text-pink-500'>here :)</span> </h1>
    <p className='mt-12 text-xl'>
        I am Gauri and very excited to see you all here. I hope that you all will cherish the experience here, and stay tuned for our new release of books.
        I hope that you will enjoy that too, and for enhancing your experiencewith our store, do not forget to turn on the notifications, so that whenever we will come wih a new book, you will
        immediately gets all the updates. Thank You!
    </p>
    <Link to="/">
    <button className='mt-6 bg-pink-500 text-white cursor-pointer px-4 py-2 rounded-md hover:bg-pink-600 duration-200'>
        Back
    </button>
    </Link>

   
     </div>

     <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
       {
        book.map((item)=>(
            <Cards key={item.id} item={item}/>
        ))
       }
     </div>
   </div>
   </>
  )
}

export default Course
