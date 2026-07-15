/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f6f3ef',
        ink: '#1f1b18',
        gold: '#c9a66b',
        goldDark: '#a8834b',
        warmGray: '#8c8178',
        taupe: '#d6cfc6',
        blush: '#e8d9cf',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
