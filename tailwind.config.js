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
          dark: '#1A1817', // almost black with warm undertone
          beige: '#F8F6F4', // warm soft background
          gold: '#C5A059', // metallic primary accent
          sand: '#E6E1Db', // secondary soft background
          gray: '#8C8782', // muted text
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
