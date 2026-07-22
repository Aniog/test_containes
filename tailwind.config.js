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
        'ivory-dark': '#F2EDE4',
        charcoal: '#1C1917',
        'charcoal-mid': '#3D3935',
        stone: '#8A8178',
        gold: '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark': '#A07840',
        blush: '#E8D5C4',
        cream: '#FDF9F3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
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
