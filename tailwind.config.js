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
          DEFAULT: '#1a365d',
          dark: '#102a43',
          light: '#2c5282',
        },
        secondary: {
          DEFAULT: '#f6ad55',
          dark: '#ed8936',
          light: '#fbd38d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
