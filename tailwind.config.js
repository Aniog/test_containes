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
          espresso: '#211915',
          ink: '#34261f',
          ivory: '#f8f1e7',
          porcelain: '#fffaf3',
          champagne: '#c79a55',
          bronze: '#8d6336',
          stone: '#dacfc0',
          muted: '#75675c',
          blush: '#ead8cb',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.22em',
        nav: '0.16em',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(33, 25, 21, 0.12)',
        glow: '0 18px 50px rgba(199, 154, 85, 0.18)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
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
