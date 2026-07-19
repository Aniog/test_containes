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
          50:  '#faf8f5',
          100: '#f3efe8',
          200: '#e6ddd0',
          300: '#d4c6b0',
          400: '#bfa88a',
          500: '#a88d6a',
          600: '#8c7253',
          700: '#6d5740',
          800: '#4a3a2b',
          900: '#2b2219',
          950: '#1a1510',
        },
        sand: {
          50:  '#fdfbf7',
          100: '#faf5eb',
          200: '#f3e9d2',
          300: '#e9d7b0',
          400: '#ddbf89',
          500: '#cfa563',
          600: '#b88944',
          700: '#936d36',
          800: '#75552c',
          900: '#5c4325',
          950: '#332412',
        },
        gold: {
          300: '#e8d5a0',
          400: '#dbbf6e',
          500: '#c9a84c',
          600: '#a88935',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        super: '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
