/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Velmora quiet-luxury palette
        velmora: {
          cream: '#F8F5F0',
          ivory: '#FFFDF9',
          stone: '#EDE8E0',
          sand: '#D9CFC2',
          taupe: '#A89F91',
          ink: '#1E1C1A',
          charcoal: '#2E2C2A',
          warmgray: '#7A746C',
          gold: '#B8860B',
          softgold: '#C9A23E',
          blush: '#E8DCD2',
          rust: '#8C5A3C',
        },
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s lux forwards',
      },
    },
  },
  plugins: [],
}
