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
          'gold-dark': '#8B6914',
          charcoal: '#2C2C2C',
          espresso: '#1A1A1A',
          muted: '#6B6B6B',
          warm: '#3D3530',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
