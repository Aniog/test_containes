/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-teal': '#00d4c8',
        'cosmos-cyan': '#00b8ff',
        'cosmos-emerald': '#00e87a',
        'cosmos-purple': '#8b5cf6',
        'cosmos-gold': '#f59e0b',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
