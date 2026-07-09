/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#1E90FF',
        'deep-navy': '#0A1628',
        'ice-white': '#E8F4FD',
        'snow-white': '#FFFFFF',
        'glacier': '#A8D8EA',
        'frost': '#1A2E4A',
        'powder': '#D6EAF8',
        'slope-orange': '#FF6B35',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
