/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2B4B',
        'navy-dark': '#0F1E35',
        'navy-light': '#2D4A7A',
        'red-china': '#C0392B',
        'red-china-dark': '#A93226',
        gold: '#D4A843',
        'slate-bg': '#F4F6F9',
        'text-main': '#1A2332',
        'text-muted': '#5A6A7E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
