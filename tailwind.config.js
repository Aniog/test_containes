/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#1A1714',
        gold: '#C9A96E',
        'gold-dark': '#B8944F',
        'text-primary': '#2C2520',
        'text-secondary': '#8A8279',
        'text-light': '#F5F0EA',
        'card-white': '#FFFFFF',
        border: '#E8E2D9',
        muted: '#F0EBE3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
