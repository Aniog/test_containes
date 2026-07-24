/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        'warm-dark': '#2D2926',
        charcoal: '#1C1917',
        gold: '#C9A96E',
        'gold-light': '#D4B87A',
        muted: '#9C8E80',
        'warm-border': '#D4C5B5',
        'warm-white': '#FAFAF7',
        rose: '#E8D5C4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'section': '0.2em',
        'btn': '0.1em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
