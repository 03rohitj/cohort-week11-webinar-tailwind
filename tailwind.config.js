/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#002b5b",   //Webinar.gg home button bg
          500: "#35577d",   //Good Morning welcome message text color
          300: "#40e0d0"    //Create webinar button bg
        },
        gray: {
          100: "#f9fafb",   //Table sub heading background
          200: "#f2f4f7",   //Heading background
          300: "#e5e9ee",    //left sidebar button bg
          400: "#999db1"    //Left sidebar links font color
        }
      }
    },
  },
  plugins: [],
}

