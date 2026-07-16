/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50: '#faf8f6',
          100: '#f5f0eb',
          200: '#ebe3d9',
          300: '#dcccb8',
          400: '#ccb197',
          500: '#bf9a7a',
          600: '#b28562',
          700: '#946f52',
          800: '#7a5c47',
          900: '#654d3d',
          950: '#1a1512',
        },
        sand: {
          50: '#fdfaf7',
          100: '#faf3ea',
          200: '#f5e6d3',
          300: '#eed4b3',
          400: '#e5bb8a',
          500: '#d9a265',
          600: '#ce8a4a',
          700: '#b07238',
          800: '#8e5c31',
          900: '#744c2b',
          950: '#3f2715',
        },
        cream: '#faf8f5',
        noir: '#0d0b0a',
        warmgray: {
          50: '#faf9f8',
          100: '#f3f0ed',
          200: '#e8e2db',
          300: '#d7cfc5',
          400: '#bfb3a5',
          500: '#a99a8a',
          600: '#8e7e6c',
          700: '#756757',
          800: '#625649',
          900: '#51473d',
          950: '#2d2721',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
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
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
