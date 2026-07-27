/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        accent: "#eab308",
      },
    },
  },
  plugins: [],
}
