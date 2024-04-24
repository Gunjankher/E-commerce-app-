/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      amazonclone :{
        background : "#E3E6E6",
        light_blue :"#232F3E",
        yellow : "#FEBD69",
        DEFAULT : "#131921"


      }
    }
    },
  },
  plugins: [],
}

