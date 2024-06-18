import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeScetionCarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Add a ref to the carousel instance

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev(); // Use the carousel instance to slide to the previous item
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // Use the carousel instance to slide to the next item
    }
  };

  const syncActiveIndex = (event) => setActiveIndex(event.item);

  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div className="px-4 lg:px-8 border relative">
        <h2 className="text2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Assign the ref to the carousel instance
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          infinite={false} // Ensure it does not loop
        />

        {activeIndex !== items.length - 5 &&
        
        <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-2.5rem",
            transform: "translateY(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}


        {activeIndex!==0&&        <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-2.5rem",
            transform: "translateY(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
 }
      </div>
    </div>
  );
};

export default HomeScetionCarosel;
