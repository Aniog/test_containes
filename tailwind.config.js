/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f8f6f2',
        gold: '#c9a96e',
        'gold-dark': '#b8934f',
        taupe: '#6b6258',
        'warm-beige': '#e5ddd3',
        'deep-charcoal': '#1a1a1a',
        'sage': '#4a7c59',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.08em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
