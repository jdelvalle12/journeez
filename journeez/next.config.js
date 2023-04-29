/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.weatherbit.io'],
  },
  // Specify the new path to the "pages" directory
  // based on the root directory of the project
 
};

module.exports = nextConfig;
