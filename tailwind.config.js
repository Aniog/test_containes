/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#F8F5F2',
          stone: '#EFEBE6',
          espresso: '#2C241F',
          'espresso-light': '#4A3F38',
          gold: '#C5A065',
          'gold-dark': '#A98652',
          'rose-gold': '#C9A08B',
          border: '#E0D9D2',
          muted: '#8A817C',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
