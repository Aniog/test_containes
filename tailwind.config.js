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
          100: '#f3efe9',
          200: '#e6ddd3',
          300: '#d4c7b5',
          400: '#bfa98f',
          500: '#ae9374',
          600: '#a07e62',
          700: '#856954',
          800: '#6d5748',
          900: '#36261c',
          950: '#1f1510',
        },
        gold: {
          50: '#fdfaef',
          100: '#faf0d8',
          200: '#f4dfad',
          300: '#edc978',
          400: '#e6b04a',
          500: '#dd9a2e',
          600: '#c47b24',
          700: '#a35d21',
          800: '#854a22',
          900: '#6c3e1f',
          950: '#3d1f0f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        superwide: '0.35em',
      },
    },
  },
  plugins: [],
}
