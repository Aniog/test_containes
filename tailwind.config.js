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
          ivory: '#F8F3EA',
          pearl: '#FFFDF8',
          linen: '#EFE2D0',
          ink: '#241B16',
          espresso: '#2B1F19',
          brass: '#A97732',
          clay: '#A87962',
          mauve: '#D6B8A4',
          smoke: '#786A5F',
          hairline: '#DED1C0',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(43, 31, 25, 0.10)',
        glow: '0 18px 45px rgba(169, 119, 50, 0.18)',
      },
      letterSpacing: {
        widestLuxury: '0.28em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
