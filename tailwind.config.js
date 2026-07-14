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
          ink: '#211713',
          cocoa: '#3a2922',
          porcelain: '#f8f1e8',
          champagne: '#efe2d1',
          sand: '#d8c6ae',
          gold: '#c6974f',
          goldDark: '#8a5d21',
          blush: '#ead8cf',
          pearl: '#fffaf2',
          moss: '#5f5a41',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.18em',
        label: '0.14em',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(33, 23, 19, 0.10)',
        card: '0 18px 48px rgba(33, 23, 19, 0.08)',
        drawer: '-20px 0 60px rgba(33, 23, 19, 0.16)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowDrift: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease both',
        slowDrift: 'slowDrift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
