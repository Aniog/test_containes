/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        'warm-dark': '#1C1814',
        'gold-accent': '#B8944E',
        'gold-light': '#E8DCC8',
        'star-gold': '#D4A853',
        'warm-gray': '#7A7570',
        'warm-border': '#E8E2D9',
        surface: '#FFFFFF',
        'text-primary': '#1A1A1A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-product': '0.05em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
