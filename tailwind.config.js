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
          ink: '#1C1814',
          espresso: '#2A211C',
          ivory: '#F8F3EA',
          pearl: '#FFFDF8',
          bone: '#EFE4D4',
          champagne: '#C6A064',
          gold: '#A97832',
          taupe: '#8C7E70',
          line: '#D8C9B4',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(42, 33, 28, 0.12)',
        soft: '0 16px 45px rgba(42, 33, 28, 0.08)',
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
