import Link from 'next/link';
import React from 'react'


export default function Nav() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
         
        </div>
  
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black-300 hover:bg-black-100 hover:text-white hover:bg-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              About{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm hover:text-white`}
            >
              See what we are about!
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
  
        
  
      </main>
    )
  }