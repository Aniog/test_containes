/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F5F0EB',
          100: '#EDE5DB',
          200: '#D9CFC1',
          300: '#B5A895',
          400: '#8F806C',
          500: '#6B5C4A',
          600: '#4A3F33',
          700: '#2D2720',
          800: '#1E1A16',
          900: '#111010',
          950: '#0A0908',
        },
        gold: {
          50: '#FBF7F0',
          100: '#F5EDD9',
          200: '#EDDDB5',
          300: '#DCCB8F',
          400: '#C4A77D',
          500: '#B08D5B',
          600: '#8F6F3D',
          700: '#6B5430',
          800: '#4A3A20',
          900: '#2E2414',
        },
        ivory: {
          50: '#FDFCFA',
          100: '#F9F5F0',
          200: '#F5F0EB',
          300: '#EDE5DB',
          400: '#DDD2C2',
          500: '#C4B5A0',
        },
        blush: {
          50: '#FDF5F5',
          100: '#F8E8E8',
          200: '#F0D0D0',
          300: '#E5B0B0',
          400: '#D4A5A5',
          500: '#C08080',
        },
        burgundy: {
          50: '#FDF2F6',
          100: '#F5DDE8',
          200: '#E8B5CC',
          300: '#D88CAA',
          400: '#C06088',
          500: '#8B2252',
          600: '#6B1A40',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
