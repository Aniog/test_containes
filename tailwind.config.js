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
          ink: '#221915',
          espresso: '#17100d',
          ivory: '#f8f2e8',
          porcelain: '#fffaf1',
          champagne: '#eadcc6',
          oat: '#d7c4aa',
          gold: '#b88a44',
          brass: '#8f6a35',
          muted: '#6d6258',
          hairline: '#dacbb7',
          blush: '#c8a88e',
        },
      },
      fontFamily: {
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(34, 25, 21, 0.14)',
        glow: '0 18px 50px rgba(184, 138, 68, 0.18)',
      },
      letterSpacing: {
        luxury: '0.18em',
        emblem: '0.28em',
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
