/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#1F1712',
        'velmora-espresso': '#34251D',
        'velmora-cream': '#F8F1E8',
        'velmora-porcelain': '#FFFDF8',
        'velmora-linen': '#E8DCCE',
        'velmora-gold': '#B9894F',
        'velmora-champagne': '#D8BC8A',
        'velmora-clay': '#8D6F5D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(31, 23, 18, 0.10)',
        drawer: '-24px 0 60px rgba(31, 23, 18, 0.18)',
      },
      letterSpacing: {
        velmora: '0.22em',
        product: '0.16em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
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
