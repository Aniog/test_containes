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
          sand: '#F9F7F2',
          gold: '#A68A56',
          charcoal: '#1C1C1C',
          text: '#555555',
          border: '#E5E2DA',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.4em',
      }
    },
  },
  plugins: [],
}
