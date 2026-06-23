/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#FAF8F5',
        'velmora-beige': '#E8E2D9',
        'velmora-charcoal': '#2C2C2C',
        'velmora-black': '#1A1A1A',
        'velmora-gold': '#C9A96E',
        'velmora-gold-dark': '#B8941F',
        'velmora-gray': '#8A8580',
        'velmora-gray-light': '#B5B0AB',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
