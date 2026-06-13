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
          navy: '#0f172a',
          'navy-light': '#1e293b',
          amber: '#d97706',
          'amber-light': '#fffbeb',
        },
      },
    },
  },
  plugins: [],
}
