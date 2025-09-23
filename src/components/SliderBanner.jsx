import React from 'react'
import Slider from "react-slick";
import "./SliderBanner.scss"

function SliderBanner() {
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner-container">
        <Slider {...settings}>
        <div>
            <img src="/static/images/banner-principal-1.png" alt="" className="banner-image" />
        </div>
        <div>
            <img src="/static/images/banner-principal-2.png" alt="" className="banner-image" />
        </div>
        <div>
            <img src="/static/images/banner-principal-3.png" alt="" className="banner-image" />
        </div>
        </Slider>
        <button className="banner-button">Conheça Agora</button>
    </div>
  );
}

export default SliderBanner