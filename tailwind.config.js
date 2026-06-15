/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rugby-green': '#1a4731',
        'rugby-green-dark': '#0f2d1e',
        'rugby-green-light': '#2a6347',
        'rugby-gold': '#c9a227',
        'rugby-gold-light': '#e8c04a',
        'rugby-dark': '#0f1a13',
        'rugby-light': '#f5f0e8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
