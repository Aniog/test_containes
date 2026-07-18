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
        'vel-bg': '#F7F4ED',
        'vel-bg-alt': '#EDE8E0',
        'vel-surface': '#FFFFFF',
        'vel-text': '#1C1A17',
        'vel-muted': '#6B635C',
        'vel-light': '#8A8178',
        'vel-border': '#D4CFC4',
        'vel-border-light': '#EDE8E0',
        'vel-gold': '#B89778',
        'vel-gold-dark': '#9A7B5C',
        'vel-deep': '#2C2824',
      },
    },
  },
  plugins: [],
}
