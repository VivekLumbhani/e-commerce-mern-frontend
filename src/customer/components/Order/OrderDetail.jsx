import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { color } from "../Products/FilterData";
import { deepPurple } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/20/solid";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetail = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="text-left"> {/* Add this class */}
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-x-5">
        {
          [1,1,1,1,1,1].map((item)=>  <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYO-tFsZsIhkohS9j1-L0WqZ1FI2BtD1v4Q&s"
                alt="Product"
              />
              <div className="space-y-2 ml-5">
                <p className=" font-semibold">Men kurta white</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color: white</span> <span>Size: M</span>
                </p>
                <p>Seller: Surat Fashion</p>
                <p>$2000</p>
              </div>
            </div>
          </Grid>

          <Grid item >
            <Box sx={{color:deepPurple[500]}}>
              <StarBorderIcon  sx={{fontSize:"2rem"}}  className="px-2 "/>
              <span>Rate & Review Product</span>

            </Box>
          </Grid>
        </Grid>)
        }
      
      </Grid>
    </div>
  );
};

export default OrderDetail;
