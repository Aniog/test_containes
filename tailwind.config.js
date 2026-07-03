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
        gold: '#C9A96E',
        'gold-light': '#D4B87A',
        'gold-dark': '#B8944F',
        charcoal: '#1C1917',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'nav': '0.1em',
        'wide-custom': '0.08em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
