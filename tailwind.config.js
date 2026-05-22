/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burger-orange': '#FF6B35',
        'burger-brown': '#8B4513',
        'burger-cream': '#FFF8DC',
        'burger-dark': '#2D2D2D',
        'burger-light': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
