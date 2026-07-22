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
          base: '#2A2420',
          cream: '#F9F6F2',
          gold: '#B48F58',
          'gold-dark': '#8F7144',
          taupe: '#6E6259',
          stone: '#A89A8E',
          hairline: '#E8E0D8',
          sand: '#EDE8E2',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-custom': '0.18em',
      },
      transitionTimingFunction: {
        'lux': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
}
