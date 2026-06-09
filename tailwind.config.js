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
          navy: '#1B2A4A',
          'navy-light': '#2C4A7C',
          gold: '#C9A84C',
          'gold-light': '#E8D5A3',
        },
        surface: {
          DEFAULT: '#F7F8FA',
          white: '#FFFFFF',
        },
        text: {
          DEFAULT: '#1A1A2E',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
