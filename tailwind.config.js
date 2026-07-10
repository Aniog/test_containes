/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1C1917',
        ivory: '#FAF7F2',
        cream: '#F0EBE1',
        gold: '#C9A96E',
        'gold-light': '#E8D5B0',
        'gold-dark': '#A8854A',
        'warm-gray': '#8A8178',
        charcoal: '#3D3530',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.3em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
