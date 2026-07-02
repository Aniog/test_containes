/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          base: '#1A1817',
          surface: '#FAF7F2',
          ivory: '#F5F0E8',
          accent: '#C2855B',
          gold: '#B8956A',
          'gold-light': '#D4BC8C',
          text: '#1A1817',
          'text-secondary': '#8B8580',
          'text-muted': '#B5B0A8',
          border: '#E5E0D8',
          'border-light': '#F0EBE4',
        }
      },
      letterSpacing: {
        'widest-plus': '0.25em',
      }
    },
  },
  plugins: [],
}
