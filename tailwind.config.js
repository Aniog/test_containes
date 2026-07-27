/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a365d',
          'navy-light': '#2c5282',
          red: '#c53030',
          'red-light': '#e53e3e',
        },
      },
    },
  },
  plugins: [],
}
