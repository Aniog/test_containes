/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d4dfed',
          200: '#b0c4db',
          300: '#86a3c4',
          400: '#6683ab',
          500: '#4c6a93',
          600: '#3d5578',
          700: '#334663',
          800: '#1a365d',
          900: '#0f2440',
          950: '#09172b',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f3d994',
          300: '#ecc15c',
          400: '#e6ad34',
          500: '#d4951f',
          600: '#b87b19',
          700: '#935d18',
          800: '#7a4b1b',
          900: '#683e1b',
          950: '#3c200b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
