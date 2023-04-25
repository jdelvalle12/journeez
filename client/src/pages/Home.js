import React from "react";
import Summer from '../images/Tropical Summer Getaways.jpg';
import Gears from '../images/Travel Gears.jpg';
import Horizon from '../images/Horizon.jpg';
import Carousel from '../../../journeez/src/components/Carousel';
// import { Inter } from 'next/font/google'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // import Nav from '../components/Nav';
// // import '/globals.css';
// import { Image } from 'react-image';


// const inter = Inter({ subsets: ['latin'] })



// const Carousel = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
//   return (
//     <Slider {...settings}>
//        {images.map((image, index) => (
//         <div key={index}>
//       <div>
//         <Image src={image} alt={`Slide ${index + 1}`} width={600} height={400}/>
//       </div>
//       {/* <div>
//         <Image src={"/images/Travel Gears.jpg"} alt={`Slide ${index + 2}`} width={300} height={25}/>
//       </div>
//       <div>
//         <Image src={"/images/Tropical Summer Getaways.jpg"} alt={`Slide ${index + 3}`} width={300} height={25}/>
//       </div> */}
//       </div>
//        ))}
//     </Slider>
//   );
// };

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="absolute left-20 top-10 flex w-full justify-center text-4xl lg:w-auto  ">
          Journe<span className="text-5xl font-bold text-blue-500">EZ</span>
      </p>
      </div>
      <div className="carousel-container relative w-full items-center  "> 
          <Carousel 
            className="carousel-wrapper"
              images={[
                { src: Summer, alt: 'Tropical Summer Getaways' },
                { src: Gears, alt: 'Travel Gears' },
                { src: Horizon, alt: 'Horizon' }
              ]}
              />
        </div>

    </main>
  );
};

export default Home;
