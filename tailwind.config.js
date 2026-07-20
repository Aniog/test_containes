/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1410',
        parchment: '#F7F3EC',
        cream: '#FAF8F4',
        gold: '#C9A96E',
        'gold-light': '#E2C98A',
        'gold-dark': '#A8854A',
        'warm-gray': '#8B7B6B',
        'warm-gray-light': '#C4B8A8',
        charcoal: '#3D3530',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'extra-wide': '0.15em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
