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
        velmora: {
          cream: '#FAF7F2',
          'cream-dark': '#F5F0E8',
          charcoal: '#1C1917',
          'charcoal-soft': '#292524',
          gold: '#C9A96E',
          'gold-light': '#D4BA8A',
          'gold-dark': '#A68A55',
          stone: '#78716C',
          'stone-light': '#A8A29E',
          border: '#E7E5E4',
        },
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
