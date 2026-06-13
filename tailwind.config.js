/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        gold: '#C8973E',
        charcoal: '#2D3748',
        warmwhite: '#F7F5F2',
        lightgold: '#F5ECD7',
        warmborder: '#E2E0DB',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
