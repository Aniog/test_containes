/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: '#12100C',
        onyx: '#1B1813',
        umber: '#2A241B',
        ivory: '#F7F2EA',
        cream: '#EFE7D9',
        sand: '#C9BBA6',
        taupe: '#6B6154',
        gold: '#C9A24B',
        goldlight: '#E4C87F',
        golddeep: '#9C7A2E',
        blush: '#B08D7A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
