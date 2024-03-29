import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'react-image';

const Carousel = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };


    return (
        <div className="carousel-container relative w-full items-center">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div>
                <Image src={image.src} alt={image.alt} width={600} height={400} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };



  export default Carousel;