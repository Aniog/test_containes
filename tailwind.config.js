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
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e6ddd0',
          300: '#d4c5ae',
          400: '#bfa888',
          500: '#ae9070',
          600: '#9e7b5e',
          700: '#846650',
          800: '#6c5445',
          900: '#594739',
          950: '#2d241c',
        },
        gold: {
          50: '#fdfaed',
          100: '#f9f2cc',
          200: '#f3e495',
          300: '#ebcf54',
          400: '#e4ba2b',
          500: '#d4a11b',
          600: '#b37d15',
          700: '#8f5b15',
          800: '#774919',
          900: '#653d19',
          950: '#3a1f0a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
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
