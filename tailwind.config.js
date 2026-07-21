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
          ivory: '#F7F1E8',
          blush: '#EFE4D8',
          pearl: '#FFFaf2',
          espresso: '#261B16',
          taupe: '#7B6A5E',
          gold: '#C69A54',
          bronze: '#9B6F35',
          champagne: '#E8D6B7',
          line: '#D8C8AE',
          mist: '#D8CDC1',
          noir: '#18110E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(38, 27, 22, 0.10)',
        glow: '0 18px 45px rgba(198, 154, 84, 0.20)',
      },
      letterSpacing: {
        luxury: '0.22em',
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
