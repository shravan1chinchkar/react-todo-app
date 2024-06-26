/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter Tight', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        rubik:['Rubik', 'sans-serif'],
      },
      boxShadow:{
        'innershadow':'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        'new': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      },
      screens:{
        'new-ratio':'500px',
        'new-ratio-2':'300px'
      }
    },
    
  },
  plugins: [],
}

