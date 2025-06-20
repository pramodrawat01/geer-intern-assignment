import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  
  const [readmore, setReadMore] = useState(false)
  const description = readmore ? product.title : `${product.title.substring(0,25)}...`

  const [liked, setLiked] = useState(false)
  
  function onReadMore(){
    setReadMore(!readmore)
  }

  function onLiked(){
    setLiked(!liked)
  }

  return(

    <div className=' relative'>

      <button
      onClick={onLiked}
      className='text-3xl absolute right-0 top-[-20px]'
      > 
      {
        liked ? (
          <FaHeart className='text-2xl'/>
        ) : (
          <CiHeart />
        )
      }
      </button>
  
      <Link
        to={`/products/${product.id}`}
        className=" w-full sm:w-[250px] flex flex-col items-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain mb-4 transition-transform duration-300 hover:scale-120 "
        />
      </Link>
      <h3 className=" font-thin text-lg text-center mb-2 ">
        {description}
        <span
        className='text-sm font-semibold cursor-pointer'
        onClick={onReadMore}>
          {readmore ? '...less' : 'more'}
        </span>
      </h3>
      
      <div className='flex gap-12 justify-center items-center w-full'>
        <p className='font-strik line-through text-[18px] font-thin decoration-gray-600'>₹  {(product.price *1.2).toFixed(2)} </p>

        <p className="font-semibold text-xl">₹{product.price}</p>
      </div>
    </div>

  )
};

export default ProductCard;
