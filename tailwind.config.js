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
          ink: '#15110D',
          espresso: '#2B2018',
          ivory: '#FAF6EE',
          parchment: '#EFE5D6',
          champagne: '#D7B56D',
          bronze: '#8E6338',
          clay: '#A8795D',
          pearl: '#FFFDF8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(43, 32, 24, 0.12)',
        editorial: '0 18px 50px rgba(21, 17, 13, 0.16)',
      },
      letterSpacing: {
        luxe: '0.18em',
        widerLuxury: '0.24em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
        softFloat: 'softFloat 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
