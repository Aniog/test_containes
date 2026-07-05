/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['Playfair Display', 'Georgia', 'serif'],
        'sans-custom': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          base: '#1C1917',
          surface: '#F8F5F1',
          cream: '#FAF8F5',
          gold: '#B89778',
          'gold-dark': '#8B6F47',
          'gold-light': '#D4B896',
          text: '#1C1917',
          'text-secondary': '#5C5752',
          border: '#E5DFD6',
          muted: '#9A9590',
        }
      },
      letterSpacing: {
        'widest': '0.15em',
        'ultra': '0.2em',
      }
    },
  },
  plugins: [],
}
