/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        cream: '#F5F1EB',
        sand: '#E8E2D9',
        warmGray: '#C4B8A9',
        taupe: '#8B7E74',
        espresso: '#3D3229',
        charcoal: '#2A2520',
        gold: '#C9A962',
        goldLight: '#D4B978',
        goldDark: '#A88B4A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      },
    },
  },
  plugins: [],
}
