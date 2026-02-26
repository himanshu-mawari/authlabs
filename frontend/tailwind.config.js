import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily :{
        login : ["Satisfy" , "ui-sans-serif"]
      }
    },
  },
  plugins: [daisyui,],
};
