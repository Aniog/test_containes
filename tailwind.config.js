/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        warm: '#F5EFE6',
        'gold': '#C9A96E',
        'gold-dark': '#B8944F',
        'warm-border': '#E8DDD0',
        'muted-text': '#6B6358',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'wide-xl': '0.15em',
        'wide-2xl': '0.2em',
      },
    },
  },
  plugins: [],
}
