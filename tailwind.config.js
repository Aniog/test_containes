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
          espresso: '#2C1F18',
          ivory: '#F8F2E9',
          champagne: '#EEE1D0',
          gold: '#C9A45C',
          burnished: '#9B7737',
          taupe: '#8A6E63',
          mist: '#D8C8B7',
          cacao: '#4B352A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(44,31,24,0.08)',
        drawer: '0 24px 100px rgba(44,31,24,0.22)',
      },
      keyframes: {
        'soft-rise': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'soft-rise': 'soft-rise 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
