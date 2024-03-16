/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lexend: "Lexend,sans-serif",
        FiraSans: "Fira Sans,sans-serif",


      }
    },
  },
  plugins: [require("daisyui")],

}

