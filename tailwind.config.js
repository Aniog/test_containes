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
          navy: '#1e3a5f',
          'navy-light': '#2c5282',
          orange: '#e07b39',
          'orange-hover': '#c96a2e',
        },
      },
    },
  },
  plugins: [],
}
