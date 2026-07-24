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
        cream: '#FDFCFB',
        charcoal: '#1A1A1A',
        gold: '#C5A059',
      },
      letterSpacing: {
        'widest-editorial': '0.2em',
      }
    },
  },
  plugins: [],
}
