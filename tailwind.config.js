/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'sans-serif'],
      },
      colors: {
        velvet: {
          50: '#faf8f6',
          100: '#f0ece6',
          200: '#e0d8cc',
          300: '#cbbfa8',
          400: '#b8a68a',
          500: '#a89070',
          600: '#8d7658',
          700: '#6b5943',
          800: '#4a3d2e',
          900: '#2c241b',
          950: '#1a1510',
        },
        gold: {
          50: '#fdf8f0',
          100: '#f9edd9',
          200: '#f2d9b0',
          300: '#e9bf7d',
          400: '#dba04a',
          500: '#c98a2e',
          600: '#b06e22',
          700: '#93531d',
          800: '#7a421e',
          900: '#66371d',
        },
        cream: {
          50: '#fefcf9',
          100: '#fcf6ed',
          200: '#f8ebd3',
          300: '#f2dbb0',
          400: '#ecc88a',
          500: '#e5b46a',
        },
        ink: {
          50: '#f2f2f3',
          100: '#dbdbde',
          200: '#b9b9c0',
          300: '#91919b',
          400: '#6b6b75',
          500: '#4a4a52',
          600: '#38383e',
          700: '#2a2a2f',
          800: '#1c1c20',
          900: '#121214',
        },
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}
