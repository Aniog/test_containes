/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        velmora: {
          light: '#F8F6F2',
          base: '#FAF9F6',
          dark: '#1C1B1A',
          gold: '#C5A059',
          goldLight: '#ECDDBE',
          muted: '#8B8681',
          border: '#E6E2DC',
        }
      }
    },
  },
  plugins: [],
}
