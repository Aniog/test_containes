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
          ink: '#161210',
          cocoa: '#2A211D',
          espresso: '#3A2B25',
          ivory: '#F8F3EA',
          pearl: '#FFFBF3',
          oat: '#E7DBCB',
          taupe: '#8A7567',
          gold: '#B98745',
          champagne: '#D7B77A',
          rose: '#D8B8A8',
        },
      },
      fontFamily: {
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(42, 33, 29, 0.12)',
        glow: '0 18px 60px rgba(185, 135, 69, 0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
      },
    },
  },
  plugins: [],
}
