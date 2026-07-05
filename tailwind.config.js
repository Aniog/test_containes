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
          ink: '#241916',
          espresso: '#34231f',
          ivory: '#fbf7ef',
          champagne: '#f2e8d9',
          sand: '#d8c5ac',
          gold: '#b98746',
          blush: '#ead6ca',
          smoke: '#75665e',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 80px rgba(36, 25, 22, 0.14)',
        soft: '0 16px 45px rgba(36, 25, 22, 0.09)',
      },
      letterSpacing: {
        luxe: '0.18em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
