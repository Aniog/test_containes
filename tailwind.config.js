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
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#E8DDD0',
          300: '#D5C4B0',
          400: '#BFA58A',
          500: '#A68B6F',
          600: '#8A7056',
          700: '#6F5A45',
          800: '#5A4737',
          900: '#3D3026',
          950: '#1A1510',
        },
        gold: {
          50: '#FDF8E8',
          100: '#F9EDC4',
          200: '#F3D98C',
          300: '#E8C054',
          400: '#D9A92A',
          500: '#C9941A',
          600: '#B07D14',
          700: '#8A5F12',
          800: '#6E4B14',
          900: '#5A3D15',
        },
        cream: '#FAF7F2',
        ink: '#1A1510',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.15em',
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
