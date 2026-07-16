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
          cocoa: '#3B2C25',
          ivory: '#F8F1E8',
          porcelain: '#FFFBF5',
          sand: '#E8D9C7',
          champagne: '#C79B5A',
          moss: '#556044',
          clay: '#A7674E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(33, 25, 21, 0.12)',
        editorial: '0 18px 45px rgba(33, 25, 21, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'drawer-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
        'drawer-in': 'drawer-in 320ms ease-out both',
      },
    },
  },
  plugins: [],
}
