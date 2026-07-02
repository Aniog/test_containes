/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-espresso': '#201814',
        'velmora-cocoa': '#3A2B24',
        'velmora-ivory': '#F8F2E9',
        'velmora-parchment': '#EEE4D4',
        'velmora-champagne': '#C79A55',
        'velmora-softgold': '#E5C990',
        'velmora-mink': '#7D6A5D',
        'velmora-blush': '#D9B8A7',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 900ms ease-out both',
      },
    },
  },
  plugins: [],
}
