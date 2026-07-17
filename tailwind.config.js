/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fefcf5',
          100: '#fcf7e8',
          200: '#f8edc8',
          300: '#f3dfa0',
          400: '#edce73',
          500: '#e8bc4a',
          600: '#d4a332',
          700: '#b0802a',
          800: '#8d6628',
          900: '#745425',
          950: '#3f2e12',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e2e2e5',
          200: '#c5c5cb',
          300: '#a0a0ab',
          400: '#7d7d8b',
          500: '#636370',
          600: '#4e4e5a',
          700: '#41414b',
          800: '#383840',
          900: '#1a1a1e',
          950: '#0e0e11',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f3d994',
          300: '#ecbf5c',
          400: '#e7a933',
          500: '#d48f21',
          600: '#b76f1a',
          700: '#92501a',
          800: '#78401c',
          900: '#66361c',
          950: '#3b1b0c',
        },
        blush: {
          50: '#fef7f4',
          100: '#fdede5',
          200: '#fbd9c9',
          300: '#f7bda3',
          400: '#f19772',
          500: '#ea794b',
          600: '#d95e31',
          700: '#b54a27',
          800: '#903d25',
          900: '#743522',
          950: '#3e190f',
        },
      },
      letterSpacing: {
        'wide': '0.08em',
        'wider': '0.15em',
        'widest': '0.2em',
      },
      height: {
        'screen-90': '90vh',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
