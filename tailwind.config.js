/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: "#FDFCF8",
          text: "#1A1A1A",
          accent: "#C5A059",
          neutral: "#9A968F",
        }
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: ".2em",
      }
    },
  },
  plugins: [],
}
