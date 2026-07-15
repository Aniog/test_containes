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
          espresso: '#211713',
          cocoa: '#33231C',
          ivory: '#F8F1E7',
          porcelain: '#FFFDF8',
          champagne: '#D8B06A',
          gold: '#A87833',
          taupe: '#B7A18E',
          clay: '#C98F7B',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(33, 23, 19, 0.10)',
        editorial: '0 30px 90px rgba(33, 23, 19, 0.18)',
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
