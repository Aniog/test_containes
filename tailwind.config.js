/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F2A4A',
          blue: '#1A5FA8',
          sky: '#2E8BC0',
          gold: '#D4A017',
          light: '#F4F7FB',
          white: '#FFFFFF',
          gray: '#6B7280',
          dark: '#1C2B3A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
