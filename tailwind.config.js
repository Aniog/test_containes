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
          DEFAULT: '#0f2a5e',
          light: '#1a3a7a',
          dark: '#0a192f',
        },
        accent: {
          DEFAULT: '#e63946',
          hover: '#c1121f',
        },
        surface: '#f6f8fb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
