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
          ink: '#201A17',
          espresso: '#332721',
          pearl: '#F8F3EC',
          ivory: '#FFFDF8',
          linen: '#E9DED0',
          clay: '#8B6B58',
          gold: '#B38A4C',
          goldDark: '#8E6735',
          rose: '#D8B7A6',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.18em',
        nav: '0.14em',
      },
      spacing: {
        18: '4.5rem',
      },
      aspectRatio: {
        portrait: '4 / 5',
        reel: '9 / 16',
        product: '5 / 6',
      },
      minHeight: {
        hero: '760px',
      },
      boxShadow: {
        velmora: '0 24px 70px rgba(32, 26, 23, 0.12)',
        soft: '0 16px 45px rgba(32, 26, 23, 0.08)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 700ms ease-out both',
        fade: 'fade 500ms ease-out both',
      },
    },
  },
  plugins: [],
}
