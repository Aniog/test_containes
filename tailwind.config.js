/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        sand: '#E8DFD5',
        warm: {
          50: '#FDFBF8',
          100: '#F9F4EC',
          200: '#F0E8D8',
          300: '#E5D5BB',
          400: '#D4B98C',
          500: '#C4A265',
          600: '#B08B4A',
          700: '#8E6F3B',
          800: '#755B32',
          900: '#5F4A2B',
        },
        deep: {
          50: '#F5F4F2',
          100: '#E8E5E0',
          200: '#D2CDC4',
          300: '#B5AEA2',
          400: '#9A9183',
          500: '#7D756A',
          600: '#655E56',
          700: '#4F4A44',
          800: '#3D3935',
          900: '#2C2926',
          950: '#1A1817',
        },
        accent: '#B08B4A',
        'accent-light': '#D4B98C',
        'accent-dark': '#8E6F3B',
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans: ["'Inter'", 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
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
