/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1917',
        'warm-black': '#292524',
        cream: '#FAF7F2',
        ivory: '#F5F0E8',
        gold: '#C9A96E',
        'gold-light': '#D4B87A',
        'gold-dark': '#A88B52',
        'warm-gray': '#A8A29E',
        stone: '#78716C',
        pearl: '#E7E5E4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
