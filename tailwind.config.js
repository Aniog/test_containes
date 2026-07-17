/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#FAF7F2',
        'velmora-warm-white': '#F5F0E8',
        'velmora-charcoal': '#2C2C2C',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#D4B87A',
        'velmora-gold-dark': '#B8943E',
        'velmora-rose': '#B8956A',
        'velmora-text': '#3D3D3D',
        'velmora-text-light': '#6B6B6B',
        'velmora-border': '#E5E0D8',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
