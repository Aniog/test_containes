/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F2',
        espresso: '#2A211E',
        gold: '#B89B6C',
        'gold-hover': '#A68A5D',
        taupe: '#6F6560',
        linen: '#FFFFFF',
        hairline: '#E4E0DA',
        sand: '#F1EDE6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.25em',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(42, 33, 30, 0.06)',
        lift: '0 16px 40px rgba(42, 33, 30, 0.10)',
      },
      transitionDuration: {
        600: '600ms',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
