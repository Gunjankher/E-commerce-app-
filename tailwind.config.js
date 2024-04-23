/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      flipkartclone :{
        background : "#F1F2F4",
        light_blue :"#232F3E",
        yellow : "#FEBD69",
        DEFAULT : "#131921"


      }
    }
    },
  },
  plugins: [],
}

