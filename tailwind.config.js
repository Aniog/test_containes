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
          primary: '#1e293b',
          dark: '#0f172a',
          accent: '#f59e0b',
          'accent-hover': '#d97706',
        }
      }
    },
  },
  plugins: [],
}
