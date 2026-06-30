/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf9',
          100: '#faf8f3',
          200: '#f5f1e8',
          300: '#ede7d9',
        },
        charcoal: {
          900: '#1a1814',
          800: '#2c2a26',
          700: '#3d3a35',
          600: '#524f49',
        },
        gold: {
          50: '#faf8f0',
          100: '#f3ecd5',
          200: '#e6d9a8',
          300: '#d9c47a',
          400: '#c9a96e',
          500: '#b8944a',
          600: '#9a7d3a',
          700: '#7a6330',
        },
        warm: {
          gray: '#8a8279',
          stone: '#a0988e',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
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
