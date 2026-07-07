/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAF7F2',
        parchment: '#F2EDE4',
        stone: '#E8E0D5',
        warmgray: '#A39B8F',
        taupe: '#6B6560',
        charcoal: '#1A1A1A',
        espresso: '#2C241F',
        gold: '#C9A227',
        golddark: '#A6831D',
        goldlight: '#D4B84A',
        blush: '#F5ECE3',
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
