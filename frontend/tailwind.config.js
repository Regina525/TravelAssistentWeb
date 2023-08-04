/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#F10917',
        black: '#000000',
        pink: '#F13742',
        gray: '#F2F4FF',
        blue:'#00308F'
      },
      fontFamily: {
        font: '--Roboto',
      },
    },
  },
  plugins: [],
}

