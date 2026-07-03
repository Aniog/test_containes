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
          50: '#faf8f6',
          100: '#f3eeea',
          200: '#e6ddd4',
          300: '#d4c7b7',
          400: '#bfac96',
          500: '#ae947b',
          600: '#a1806a',
          700: '#866b59',
          800: '#6e594c',
          900: '#5a4a40',
          950: '#302621',
        },
        gold: {
          50: '#fdf9f0',
          100: '#f9f0db',
          200: '#f2dfb6',
          300: '#e9c887',
          400: '#deae56',
          500: '#d69936',
          600: '#c7802b',
          700: '#a56525',
          800: '#855124',
          900: '#6c4320',
          950: '#3a2210',
        },
        cream: '#faf7f4',
        warm: {
          50: '#fdfbf9',
          100: '#faf6f1',
          200: '#f2e9dd',
          300: '#e8d9c7',
          400: '#d9c2a8',
          500: '#ccad8b',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.12em',
      },
    },
  },
  plugins: [],
}
