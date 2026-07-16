import tailwindcssAnimate from 'tailwindcss-animate';

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
          100: '#f9edd9',
          200: '#f2d9b0',
          300: '#e8be7e',
          400: '#dba04f',
          500: '#c9842f',
          600: '#b86a25',
          700: '#995021',
          800: '#7d4121',
          900: '#67361e',
        },
        gold: {
          light: '#e8d5a3',
          DEFAULT: '#c9a96e',
          dark: '#a68b4b',
          muted: '#d4c4a0',
        },
        cream: {
          light: '#fdfbf7',
          DEFAULT: '#f9f5ed',
          dark: '#f0e9d8',
        },
        charcoal: {
          light: '#3d3d3d',
          DEFAULT: '#1a1a1a',
          dark: '#0d0d0d',
        },
        sage: {
          light: '#e8ede6',
          DEFAULT: '#9caa97',
          dark: '#6b7a66',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.015em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
