/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F2A43',
        brand: {
          DEFAULT: '#1D6FB8',
          dark: '#155A94',
          light: '#E8F1F9',
        },
        accent: {
          DEFAULT: '#E88B1D',
          dark: '#C97712',
        },
        paper: '#F6F8FB',
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
