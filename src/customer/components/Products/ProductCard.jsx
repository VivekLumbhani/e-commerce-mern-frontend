import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate=useNavigate();

  const handleNavigate=()=>{
    console.log("handle nav");
    navigate(`/product/${5}`)
  }
  return (
    <div onClick={()=>handleNavigate()} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>

      <div className="textPart bg-white p-3">
        <div className="mb-2">
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>

        <div className="flex flex-col items-start">
          <div className="font-semibold">₹{product.discountedPrice}</div>
          <div className="line-through opacity-50">₹{product.price}</div>
          <div className="text-green-600 font-semibold">
            {product.descountPercent}% off
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
