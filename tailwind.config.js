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
          gold: '#B8860B',
          'gold-light': '#D4A843',
          'gold-dark': '#8B6508',
          charcoal: '#1A1A1A',
          espresso: '#2C2420',
          warm: '#3D3330',
          muted: '#6B5E57',
          'text-light': '#8C7E76',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
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
