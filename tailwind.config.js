/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1A1714',
          soft: '#2A2520',
        },
        cream: {
          DEFAULT: '#F7F3EC',
          deep: '#EFE8DC',
        },
        sand: '#E3D9C8',
        gold: {
          DEFAULT: '#B08D57',
          deep: '#8A6D3E',
          soft: '#C9A876',
        },
        charcoal: '#2A2520',
        stone: '#6B6258',
        mist: '#B8AE9F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(26,23,20,0.25)',
        card: '0 6px 30px -12px rgba(26,23,20,0.18)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
