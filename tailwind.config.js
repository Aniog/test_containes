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
          pearl: '#FFFBF4',
          sand: '#E8D7BE',
          linen: '#F0E5D6',
          espresso: '#261B15',
          cocoa: '#49362B',
          taupe: '#7C6A5D',
          gold: '#B88A44',
          champagne: '#D8BA7D',
          line: '#D8C8B4',
          rose: '#C9A69A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(38, 27, 21, 0.10)',
        card: '0 14px 40px rgba(38, 27, 21, 0.08)',
        drawer: '0 20px 80px rgba(38, 27, 21, 0.24)',
      },
      letterSpacing: {
        product: '0.22em',
        refined: '0.16em',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
        'soft-in': 'softIn 500ms ease both',
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
