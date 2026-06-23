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
          navy: '#0f2742',
          blue: '#155e9f',
          teal: '#0f766e',
          amber: '#d97706',
          surface: '#f4f7fb',
        },
      },
    },
  },
  plugins: [],
}
