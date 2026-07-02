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
          pearl: '#F6F1E8',
          ivory: '#FFFBF3',
          espresso: '#2B211A',
          taupe: '#7E6B5B',
          gold: '#D9B66F',
          bronze: '#9A6F35',
          night: '#17110D',
          line: '#E1D4C1',
          blush: '#EAD8CB',
          sage: '#9A9B83',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(43, 33, 26, 0.12)',
        soft: '0 16px 40px rgba(43, 33, 26, 0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
