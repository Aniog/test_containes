/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        parchment: '#f2eee8',
        warmgray: '#e8e2da',
        taupe: '#a89f91',
        clay: '#7d7366',
        espresso: '#3e3831',
        charcoal: '#29241f',
        ink: '#1b1814',
        gold: {
          100: '#f8f1e3',
          200: '#efe2c7',
          300: '#e2cd9e',
          400: '#cfb070',
          500: '#bfa065',
          600: '#a68540',
          700: '#8a6a30',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
