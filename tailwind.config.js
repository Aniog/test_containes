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
        'vel-bg': '#F8F5F1',
        'vel-bg-alt': '#F1EDE6',
        'vel-text': '#2C2522',
        'vel-muted': '#6B6058',
        'vel-gold': '#B89778',
        'vel-gold-dark': '#8C6F52',
        'vel-gold-light': '#D4C4A8',
        'vel-border': '#D9D0C4',
      },
    },
  },
  plugins: [],
}
