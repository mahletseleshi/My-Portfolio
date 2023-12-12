/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Signature: "Great Vibes"
      },
      colors:{
        Yellow: "#F8CF2B"
      },
      skew: {
        '8': "8deg"
      }
    },
  },
  plugins: [],
}

