/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-espresso': '#1F1712',
        'velmora-ink': '#31251D',
        'velmora-parchment': '#F6EFE6',
        'velmora-ivory': '#FFF9F0',
        'velmora-sand': '#E8D8C5',
        'velmora-bronze': '#A7753B',
        'velmora-champagne': '#D7B46A',
        'velmora-rose': '#C8A28B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
