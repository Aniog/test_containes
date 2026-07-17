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
          ink: '#1C1612',
          espresso: '#2D211B',
          ivory: '#F8F2E8',
          parchment: '#FFF9EF',
          champagne: '#D8B978',
          gold: '#B78A3E',
          blush: '#EFE0D2',
          line: '#DDCDB9',
          muted: '#6F6257',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(45, 33, 27, 0.09)',
        editorial: '0 28px 70px rgba(45, 33, 27, 0.16)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 900ms ease-out both',
      },
    },
  },
  plugins: [],
}
