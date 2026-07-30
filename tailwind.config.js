/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'fanta-orange': '#FF6B00',
        'fanta-yellow': '#FFD700',
        'fanta-purple': '#8B2FC9',
        'fanta-red': '#E8003D',
        'fanta-green': '#00A651',
        'fanta-blue': '#0099CC',
        'fanta-dark': '#1A1A2E',
        'fanta-light': '#FFF8F0',
      },
    },
  },
  plugins: [],
}
