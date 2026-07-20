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
          cream: '#f8f6f1',
          ivory: '#fffefb',
          charcoal: '#1f1f1f',
          stone: '#6b6560',
          taupe: '#d4cec3',
          gold: '#c5a065',
          'gold-dark': '#a5824a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      transitionDuration: {
        '600': '600ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
