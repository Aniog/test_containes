/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        'navy-dark': '#1A2A3A',
        steel: '#1E6FA5',
        sky: '#4DA8DA',
        gold: '#C9A84C',
        surface: '#F5F7FA',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
