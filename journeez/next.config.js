/** @type {import('next').NextConfig} */


const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.weatherbit.io'],
  },
  // Specify the new path to the "pages" directory
  // based on the root directory of the project
  dir: path.join(__dirname, 'src'),
};

module.exports = nextConfig;
