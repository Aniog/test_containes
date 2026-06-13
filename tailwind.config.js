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
          navy: '#0A1628',
          'navy-light': '#132240',
          'navy-medium': '#1A2D4E',
          gold: '#C8A44E',
          'gold-light': '#D4B86A',
          'gold-dark': '#A88A3A',
          steel: '#2C3E50',
          'steel-light': '#3D566E',
          'gray-light': '#F4F6F8',
          'gray-medium': '#E0E4EA',
          'gray-dark': '#6B7A8D',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
