/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#201A17',
        'velmora-espresso': '#3A2A21',
        'velmora-ivory': '#FBF7EF',
        'velmora-mist': '#F5EEE4',
        'velmora-sand': '#EEE5D8',
        'velmora-champagne': '#D9B86F',
        'velmora-gold': '#B88935',
        'velmora-clay': '#9A6B52',
        'velmora-rouge': '#7A3832',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(32, 26, 23, 0.18)',
        card: '0 18px 60px rgba(58, 42, 33, 0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 800ms ease-out both',
      },
    },
  },
  plugins: [],
}
