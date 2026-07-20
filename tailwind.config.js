/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          cream: '#FAF7F2',
          warm: '#F5EFE6',
          sand: '#E8E0D5',
          taupe: '#C9BFB0',
          gold: '#C5A572',
          'gold-light': '#D4B88A',
          'gold-dark': '#8B7355',
          charcoal: '#2C2824',
          'charcoal-light': '#3D3833',
          espresso: '#1A1816',
          'text-primary': '#2C2824',
          'text-secondary': '#6B635A',
          'text-muted': '#9A9088',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
