import { Button } from "@headlessui/react";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYO-tFsZsIhkohS9j1-L0WqZ1FI2BtD1v4Q&s"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className=" font-semibold">Men slim kurta white</p>
          <p className=" opacity-70">Size: L,White</p>
          <p className=" opacity-70 mt-2">Seller : surat fashion</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold ">₹199</p>
            <p className="opacity-50 line-through">₹250</p>
            <p className=" text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      
      <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineOutlined />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm" >3</span>
            <span className="py-1 px-7 border rounded-sm">
              <IconButton sx={{color:"RGB(145 85 253)"}}>
                <AddCircleOutlineOutlined />
              </IconButton>
            </span>
          </div>
          <div>
            <Button sx={{color:"RGB(145 85 253)"}} >REMOVE</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
