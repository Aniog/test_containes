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
          blue: '#1B4F8A',
          'blue-dark': '#163F6E',
          orange: '#E87722',
          'orange-dark': '#C9651A',
          dark: '#1A2332',
          mid: '#4A5568',
          light: '#F7F9FC',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
