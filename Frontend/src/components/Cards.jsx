import React from 'react'

function Cards({item}) {
   
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-white text-black w-96 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title} </p><div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-2 duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
