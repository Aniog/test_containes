import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#FCFAF7',
          obsidian: '#1A1A1A',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      }
    },
  },
  plugins: [tailwindAnimate],
}
