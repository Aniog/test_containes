/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F6F3EE',
          surface: '#FFFFFF',
          ink: '#1C1917',
          muted: '#6B6560',
          subtle: '#A39E99',
          line: '#E7E2DB',
          accent: '#B08D57',
          accentHover: '#96763F',
          warm: '#F1EBE3',
          dark: '#141210',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.18em',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(28,25,23,0.06)',
        lift: '0 18px 45px rgba(28,25,23,0.10)',
      },
      animation: {
        'fade-in': 'fadeIn .35s ease-out forwards',
        'slide-up': 'slideUp .4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
