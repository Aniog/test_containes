/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F8F5F1',
          dark: '#F0EBE4',
          light: '#FDFBF9',
        },
        espresso: '#2C2420',
        mocha: '#4A3F35',
        taupe: '#6B5E55',
        'warm-gray': '#9E948A',
        champagne: '#E8DCC8',
        gold: {
          DEFAULT: '#A67C52',
          dark: '#8B6A42',
          light: '#C49A6C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.22em',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(44, 36, 32, 0.08)',
        'glow': '0 4px 20px rgba(166, 124, 82, 0.15)',
      },
      transitionTimingFunction: {
        'lux': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
