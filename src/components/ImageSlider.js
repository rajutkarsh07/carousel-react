import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider..css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    console.log(current);
    console.log("left button clicked");
    setCurrent(current !== 0 ? current - 1 : SliderData.length);
  };

  const nextSlide = () => {
    console.log(current);
    console.log("right button clicked");
    setCurrent(current !== SliderData.length ? current + 1 : 0);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left" onClick={prevSlide} />

      {/* {SliderData.map((slides, index) => {
        return <img src={slides.image} alt="image" key={index} />;
      })} */}

      {SliderData.map((slides, index) => {
        return (
          <div>
            {index === current && (
              <img src={slides.image} alt="image" key={index} /> //images are not loading
            )}
          </div>
        );
      })}

      {SliderData.map((slides, index) => {
        return (
          <div key={index}>{index === current && <p>{slides.name}</p>}</div> //just printing slides name to check if slides are working or not
        );
      })}

      <FaArrowAltCircleRight className="right" onClick={nextSlide} />
    </div>
  );
};

export default ImageSlider;
