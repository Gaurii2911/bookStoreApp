import React from "react";

import Cards from './Cards.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

function FreeBook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
         const res = await axios.get("http://localhost:3000/book");
         console.log(res.data);
         setBook(res.data.filter(
    (data) => data.category === "free"
  ));
      }catch(error){
           console.log(error);
      }
    }
    getBook();
  },[])
 

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 ">

      <h1 className="font-semibold text-2xl pb-2">
        Free Offered Courses
      </h1>

      <p className="pb-6">
        I am a very talented person and I believe in myself
        that I will solve all my life's problems and will
        make my parents proud.
      </p>

      

    </div>
   <Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={3}
  
  
  navigation={true}
  pagination={{ clickable: true }}
>
    {book.map((item) => (

          <SwiperSlide key={item.id} className="flex justify-center">

            <Cards item={item} />

          </SwiperSlide>

        ))}

      </Swiper>
    </>
  );
}

export default FreeBook;