/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display SC"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          950: '#0a0806',
          900: '#1a1512',
          800: '#2a221c',
          700: '#3d322a',
          600: '#5a4a3e',
          500: '#7a6654',
          400: '#9e8a78',
          300: '#bfae9e',
          200: '#d9cec2',
          100: '#ede6de',
          50: '#f6f2ec',
        },
        gold: {
          900: '#8a6e2b',
          700: '#b8963f',
          500: '#d4af37',
          300: '#e2c96a',
          100: '#f3e8b0',
          50: '#fbf3d9',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f9f4eb',
          200: '#f0e6d3',
        },
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
      },
    },
  },
  plugins: [],
}
