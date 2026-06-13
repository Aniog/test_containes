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
          'navy-light': '#2C3E6B',
          gold: '#C9A84C',
          'gold-light': '#DFC66A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          bg: '#F8F9FC',
        },
        text: {
          primary: '#1A1A2E',
          secondary: '#5A6A7E',
        },
        border: {
          DEFAULT: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
