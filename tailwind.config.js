/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steam: { DEFAULT: '#1b2838', light: '#66c0f4' },
        epic: { DEFAULT: '#2d2d2d', light: '#c7c7c7' },
        nintendo: { DEFAULT: '#e4000f' },
        playstation: { DEFAULT: '#003087', light: '#00439c' },
        xbox: { DEFAULT: '#107c10' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
