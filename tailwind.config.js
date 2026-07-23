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
          ink: '#211814',
          charcoal: '#3A2A24',
          cream: '#F7F0E6',
          pearl: '#FFF9F1',
          sand: '#E8D8C3',
          mist: '#CDBEA9',
          gold: '#B88A4A',
          'gold-deep': '#8A6232',
          rose: '#B17A67',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 28px 80px rgba(33, 24, 20, 0.13)',
        card: '0 18px 48px rgba(33, 24, 20, 0.09)',
        glow: '0 18px 60px rgba(184, 138, 74, 0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
        'soft-in': 'softIn 900ms ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
