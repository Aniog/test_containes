import path from "path"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Soft warm neutral
        foreground: '#232323', // Deep charcoal/black
        primary: {
          DEFAULT: '#9A7B4F', // Warm gold accent for better contrast
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#EAE6E1',
          foreground: '#666666',
        },
        border: '#EAE6E1',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
