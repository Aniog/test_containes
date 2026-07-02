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
          ink: '#17100D',
          espresso: '#2A1C16',
          ivory: '#FBF7EF',
          sand: '#EFE5D7',
          champagne: '#C99B5C',
          gold: '#A97836',
          taupe: '#7C6B5C',
          stone: '#D8C9B9',
          blush: '#F5E9DF',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(23, 16, 13, 0.12)',
        soft: '0 16px 50px rgba(42, 28, 22, 0.10)',
      },
      letterSpacing: {
        luxury: '0.18em',
        widerLuxury: '0.24em',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'soft-in': 'softIn 900ms ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softIn: {
          '0%': { opacity: '0', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
