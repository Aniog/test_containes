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
          ink: '#15120F',
          espresso: '#2B211B',
          ivory: '#FAF7F1',
          parchment: '#EFE7DA',
          champagne: '#C8A765',
          antique: '#8F6B32',
          mist: '#D7CDBF',
          rose: '#A87866',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.16em',
        'luxury-wide': '0.22em',
      },
      boxShadow: {
        luxury: '0 24px 80px rgba(21, 18, 15, 0.14)',
        'soft-gold': '0 18px 50px rgba(143, 107, 50, 0.16)',
      },
      aspectRatio: {
        reel: '9 / 16',
        editorial: '4 / 5',
        product: '3 / 4',
        wide: '16 / 9',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawerIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
        drawerIn: 'drawerIn 320ms ease-out both',
      },
    },
  },
  plugins: [],
}
