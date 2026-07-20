/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        sand: '#F5EDE4',
        clay: '#E8D5C4',
        umber: '#8B6F5E',
        espresso: '#3D2C25',
        'espresso-light': '#5C4438',
        gold: '#C9A96E',
        'gold-light': '#DEC48C',
        'gold-pale': '#F0E4CE',
        blush: '#F4EFEA',
        champagne: '#FBF6F0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra': '0.35em',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
