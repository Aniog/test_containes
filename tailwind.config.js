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
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f2d8b0',
          300: '#e9be7d',
          400: '#e0a34e',
          500: '#d48a2f',
          600: '#c06e24',
          700: '#a05320',
          800: '#82421f',
          900: '#6a381c',
          950: '#3a1b0c',
        },
        warm: {
          50: '#faf7f2',
          100: '#f3ede1',
          200: '#e6d9c1',
          300: '#d5bf9a',
          400: '#c5a477',
          500: '#b98e5d',
          600: '#ac7a4e',
          700: '#8f6141',
          800: '#744f39',
          900: '#5f4231',
          950: '#332119',
        },
        midnight: {
          50: '#f6f5f0',
          100: '#e8e5d8',
          200: '#d2ccb4',
          300: '#b8ae8b',
          400: '#a19369',
          500: '#8d7d55',
          600: '#786547',
          700: '#604f3a',
          800: '#504132',
          900: '#46382d',
          950: '#1a1510',
        },
        ivory: {
          50: '#fefcf8',
          100: '#fdf8ee',
          200: '#f9efd9',
          300: '#f4e2bc',
          400: '#edd096',
          500: '#e4ba6e',
          600: '#d9a14e',
          700: '#c6893e',
          800: '#a46e37',
          900: '#865b30',
          950: '#473016',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
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
