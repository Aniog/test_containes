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
          ink: '#16120F',
          espresso: '#2B211B',
          cream: '#F7F1E8',
          porcelain: '#FFFAF2',
          linen: '#E7D8C5',
          champagne: '#C79A5B',
          antique: '#A8743D',
          sage: '#7C806E',
          blush: '#E8D2C5',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        velmoraSoft: '0 24px 60px rgba(43, 33, 27, 0.12)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 900ms ease-out both',
      },
    },
  },
  plugins: [],
}
