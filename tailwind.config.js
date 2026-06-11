/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          200: '#fde68a',
          400: '#f5c842',
          500: '#d4a017',
        },
        navy: {
          600: '#1e2d4a',
          700: '#141c35',
          800: '#0f1629',
          900: '#0a0e1a',
        },
      },
    },
  },
  plugins: [],
}
