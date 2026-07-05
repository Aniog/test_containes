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
          ivory: '#F7F1E8',
          espresso: '#211814',
          taupe: '#B9A99A',
          champagne: '#EFE2CF',
          gold: '#B98A45',
          bronze: '#6E4B2E',
          pearl: '#FFFDF8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(33, 24, 20, 0.12)',
        drawer: '-24px 0 80px rgba(33, 24, 20, 0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
        'fade-in': 'fade-in 420ms ease-out both',
      },
    },
  },
  plugins: [],
}
