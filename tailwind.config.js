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
          cream: '#FAF7F2',
          ivory: '#F5F0E8',
          sand: '#E8DFD3',
          gold: '#B8956A',
          'gold-light': '#D4B896',
          'gold-dark': '#8B6D47',
          charcoal: '#2C2420',
          espresso: '#1A1512',
          warm: '#3D3330',
          muted: '#7A6E66',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'wide-xl': '0.15em',
      },
    },
  },
  plugins: [],
}
