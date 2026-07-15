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
          50: '#FAF8F6',
          100: '#F5F1EC',
          200: '#EDE5DB',
          300: '#E2D5C7',
          400: '#D4C3AF',
          500: '#C5AE93',
          600: '#B89A7A',
          700: '#A68464',
          800: '#8A7054',
          900: '#6F5B45',
        },
        champagne: {
          DEFAULT: '#D4AF37',
          light: '#E5C76B',
          dark: '#B8942D',
        },
        obsidian: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          dark: '#0D0D0D',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          warm: '#F9F5EF',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'extra-wide': '0.15em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
