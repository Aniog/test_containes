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
          50: '#FDFBF9',
          100: '#F5F0EB',
        },
        warm: {
          900: '#1A1915',
          800: '#2C2825',
          700: '#3D3835',
          600: '#6B635A',
          500: '#8A7F74',
          400: '#A69D92',
          300: '#C4BEB5',
          200: '#E0D9D0',
          100: '#EDE8E2',
        },
        gold: {
          50: '#FBF8F4',
          100: '#F5EDE0',
          200: '#E8D5BE',
          300: '#D4B896',
          400: '#C4A882',
          500: '#B8956E',
          600: '#A67D52',
          700: '#8B6442',
          800: '#6E4E35',
          900: '#5A3F2B',
        },
        sage: '#7A9A6D',
        dusty: '#C27070',
        pearl: '#E8E2DB',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'extra-wide': '0.1em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.04)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
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
