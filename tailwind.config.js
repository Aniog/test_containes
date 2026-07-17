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
        ivory: '#F5F0E8',
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6560',
        gold: '#C9A962',
        'gold-light': '#E5D4B3',
        'gold-dark': '#A68B4B',
        border: '#E8E4DE',
        'border-light': '#F0ECE6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
