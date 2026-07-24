/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FBF7F4',
          sand: '#EDE4DB',
          gold: '#C8A97E',
          'gold-dark': '#B8935A',
          'gold-light': '#DFCFB0',
          charcoal: '#2C2C2C',
          ink: '#1A1A1A',
          warmgray: '#8B8580',
          blush: '#F5EEE8',
          ivory: '#FEFCF9',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.12em',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
