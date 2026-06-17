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
          gold: '#b8860b',
          'gold-light': '#d4a017',
          'gold-dark': '#8b6508',
          charcoal: '#1a1f2e',
          'charcoal-light': '#252b3d',
        },
      },
    },
  },
  plugins: [],
}
