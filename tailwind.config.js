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
          DEFAULT: '#1B4D72',
          dark: '#133C5A',
        },
        secondary: {
          DEFAULT: '#2A9D8F',
          dark: '#21867A',
        },
        surface: {
          DEFAULT: '#F7F9FB',
          dark: '#EEF1F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
