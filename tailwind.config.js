/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        cream: '#FAF7F2',
        taupe: '#6B6258',
        gold: '#C9A96E',
        'gold-hover': '#B8944F',
        divider: '#E5DDD3',
        'footer-bg': '#1A1A1A',
        'footer-text': '#A0988A',
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.15em',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
