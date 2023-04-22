/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
	  extend: {
		utilities: {
		  '.content-auto': {
			contentVisibility: 'auto',
		  },
		},
	  },
	},
	plugins: [],
  };

