/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#FBF7F4',
          sand: '#F0EAE4',
          gold: '#C8A96E',
          'gold-dark': '#B8954A',
          espresso: '#2C2420',
          charcoal: '#3D3632',
          blush: '#D4A99A',
          'blush-light': '#F5EBE8',
          stone: '#8A817C',
          'stone-light': '#B8B0AA',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.12em',
        wide: '0.06em',
      },
    },
  },
  plugins: [],
}
