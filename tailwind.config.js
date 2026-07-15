/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#201813',
        porcelain: '#f6f1eb',
        card: '#fbf7f2',
        line: '#d5c8bb',
        champagne: '#d7b27b',
        'champagne-deep': '#b89058',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 60px rgba(32, 24, 19, 0.08)',
      },
    },
  },
  plugins: [],
}
