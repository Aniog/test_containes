/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        cream: '#F2EBE0',
        sand: '#E5DCCB',
        taupe: '#A89B86',
        cocoa: '#6B5D4F',
        espresso: '#2B2420',
        'espresso-bg': '#1F1A16',
        gold: '#B8956A',
        'gold-deep': '#9A7A52',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
