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
          ink: '#241815',
          espresso: '#3A2924',
          bark: '#5F463B',
          parchment: '#FBF7EF',
          champagne: '#F3E8D8',
          pearl: '#FFFDF8',
          oyster: '#E8DED0',
          gold: '#B08D57',
          goldDeep: '#80643B',
          blush: '#D9BFAE',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(36, 24, 21, 0.10)',
        lift: '0 18px 50px rgba(36, 24, 21, 0.16)',
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
