/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        sand: '#E8E4DE',
        charcoal: '#2C2824',
        espresso: '#3D3833',
        warmgray: '#8B8580',
        gold: '#B8956C',
        goldLight: '#D4B896',
        goldDark: '#9A7B55',
        ivory: '#FFFEF9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'extra-wide': '0.15em',
      },
    },
  },
  plugins: [],
}
