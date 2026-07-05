/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
          pale: '#F5E6C8',
        },
        'warm-white': '#FEFCF9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.12em',
        'nav': '0.08em',
        'btn': '0.1em',
      },
      maxWidth: {
        'container': '1280px',
      },
      keyframes: {
        'scale-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slideInLeft': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'scale-in': 'scale-in 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
