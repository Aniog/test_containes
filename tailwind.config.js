/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep, warm base
        obsidian: {
          50: '#faf9f7',
          100: '#f0ede8',
          200: '#e0dbd3',
          300: '#c7bfb2',
          400: '#a89d8d',
          500: '#8f8373',
          600: '#756a5c',
          700: '#5d5449',
          800: '#4a4339',
          900: '#2d2820',
          950: '#1a1714',
        },
        // Warm gold accent
        gold: {
          50: '#fdf9ef',
          100: '#faf0d5',
          200: '#f4dea9',
          300: '#edc874',
          400: '#e5ad42',
          500: '#d4952b',
          600: '#b87720',
          700: '#97591d',
          800: '#7c471f',
          900: '#673b1e',
          950: '#3a1d0d',
        },
        // Cream / warm white
        cream: {
          50: '#fefdfb',
          100: '#fbf8f3',
          200: '#f6f0e4',
          300: '#eee4d1',
          400: '#e2d2b5',
          500: '#d4be96',
          600: '#c2a576',
          700: '#a88b5c',
          800: '#8b724e',
          900: '#725e42',
          950: '#3d3022',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '0.04em' }],
        'heading': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '0.03em' }],
        'subheading': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
