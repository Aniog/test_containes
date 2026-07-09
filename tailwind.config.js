/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FEFCF9',
          100: '#FAF7F2',
          200: '#F5F0E8',
          300: '#EDE6D9',
        },
        stone: {
          950: '#1C1917',
        },
        warm: {
          50: '#FAF7F2',
          100: '#F5F0E8',
          200: '#E8E0D8',
          300: '#D4C9BB',
          400: '#B8A898',
          500: '#9C8B78',
          600: '#7A7067',
          700: '#5C5449',
          800: '#3D3731',
          900: '#2C2420',
        },
        gold: {
          light: '#D4B87A',
          DEFAULT: '#C8A96E',
          dark: '#A68B4B',
          muted: '#BFA86A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['1.25rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
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
