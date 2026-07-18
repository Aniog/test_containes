/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-black': '#1a1a1a',
        'velmora-charcoal': '#2d2d2d',
        'velmora-gold': '#b8956a',
        'velmora-gold-light': '#d4b896',
        'velmora-cream': '#faf8f5',
        'velmora-warm-gray': '#8a8580',
        'velmora-border': '#e8e4df',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
