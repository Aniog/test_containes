/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F5FA',
          100: '#DCE7F2',
          200: '#B9CFE5',
          300: '#8FB0D2',
          400: '#5D8ABA',
          500: '#3E6DA3',
          600: '#2E5688',
          700: '#24456D',
          800: '#1E3A5F',
          900: '#16293F',
          950: '#0F1D2F',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
