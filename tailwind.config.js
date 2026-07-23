/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#1f1713',
          cream: '#f8f1e7',
          pearl: '#fffaf2',
          linen: '#e8dccb',
          gold: '#c99a4a',
          brass: '#ad7b32',
          clay: '#8f604d',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(31, 23, 19, 0.12)',
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
