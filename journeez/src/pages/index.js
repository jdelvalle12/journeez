import Image from 'next/image'
import { Inter } from 'next/font/google'
import  Link  from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Nav from '../components/Nav';
import Head from 'next/head';
import ReactDOM from 'react-dom';
import useSWR from 'swr';
// import { fetcher } from './lib/fetcher';
// import App from './_app';

const inter = Inter({ subsets: ['latin'] })

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//         autoplay: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1,
//         dots: true,
//         autoplay: true
//       }
//     }
//   ]
// };

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
    <Slider {...settings}>
       {images.map((image, index) => (
        <div key={index}>
      <div>
        <Image src={image} alt={`Slide ${index + 1}`} width={600} height={400}/>
      </div>
      {/* <div>
        <Image src={"/images/Travel Gears.jpg"} alt={`Slide ${index + 2}`} width={300} height={25}/>
      </div>
      <div>
        <Image src={"/images/Tropical Summer Getaways.jpg"} alt={`Slide ${index + 3}`} width={300} height={25}/>
      </div> */}
      </div>
       ))}
    </Slider>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="absolute left-20 top-10 flex w-full justify-center text-4xl lg:w-auto  ">
          Journe<span className="text-5xl font-bold text-blue-500">EZ</span>
      </p>
        {/* <div className="fixed top-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-end gap-2 p-8 lg:pointer-events-auto lg:p-0 ml-80"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <Image
              src={"/images/Travel Pin Icon.jpg"}
              alt="globe Logo"
              className="dark"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      {/* {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}


       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/blogs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
          Blogs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm hover:text-white`}
          >
           See what other travelers have to say in their experience.
          </p>
        </a>

        <a
          href="/explore"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Explore{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm hover:text-white`}
          >
            Explore where to stay, visit, and eat in each region.
          </p>
        </a>

        <a
          href="/weather"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Weather{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm hover:text-white`}
          >
            Get the current weather and the forecast so you are better prepared for your trip.
          </p>
        </a>

        <a
          href="/shop"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Shop{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm hover:text-white`}
          >
            Get everything you need for your next trip!
          </p>
        </a>

        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm hover:text-white`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}

      </div>

        <div className="carousel-container relative w-full items-center  "> 
          <Carousel 
            className="carousel-wrapper"
              images={[
                "/images/Tropical Summer Getaways.jpg", "/images/Travel Gears.jpg", "/images/Horizon.jpg"]}
              />
        </div>

    </main>
  )
}
