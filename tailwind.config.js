/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        bg: '#F8F5F1',
        'bg-dark': '#1C1816',
        surface: '#FFFFFF',
        'surface-warm': '#F5F2ED',
        gold: '#BFA46F',
        'gold-dark': '#9A8050',
        'gold-light': '#D4C4A3',
        border: '#E5DFD6',
        'border-light': '#F0EBE3',
        'text-muted': '#6B6259',
        'text-light': '#8B8178',
      },
    },
  },
  plugins: [],
}
