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
          champagne: '#C9A35D',
          antique: '#9A7130',
          espresso: '#211711',
          ink: '#2D241E',
          smoke: '#6F6258',
          sand: '#D9C9B3',
          blush: '#E9D9CB',
          deep: '#120D0A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.18em',
        widest: '0.28em',
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(33, 23, 17, 0.12)',
        soft: '0 14px 40px rgba(33, 23, 17, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.75s ease-out both',
        'soft-pulse': 'softPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
