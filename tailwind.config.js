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
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'vel-bg': '#F8F5F1',
        'vel-bg-dark': '#1C1814',
        'vel-surface': '#FFFFFF',
        'vel-surface-warm': '#F4F0E9',
        'vel-text': '#2C2520',
        'vel-text-muted': '#6B6259',
        'vel-gold': '#B8976E',
        'vel-gold-dark': '#8C6F4E',
        'vel-border': '#E5DFD4',
      },
    },
  },
  plugins: [],
}
