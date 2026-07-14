/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f7f4ef',
        'warm-white': '#faf8f5',
        gold: '#b8935a',
        'gold-light': '#d4b87a',
        'gold-dark': '#8c6d3f',
        charcoal: '#1f1f1f',
        'charcoal-light': '#2e2e2e',
        muted: '#6b6b6b',
        border: '#e6e1d8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
