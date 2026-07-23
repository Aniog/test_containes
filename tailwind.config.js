/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#2C2C2C',
        gold: '#C9A96E',
        'gold-light': '#D4B896',
        'gold-dark': '#A8843E',
        ivory: '#F5F0EB',
        taupe: '#8A8580',
        rose: '#B8956A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
