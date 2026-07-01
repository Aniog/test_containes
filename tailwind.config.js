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
          bg: '#0F0E0C',
          'bg-alt': '#161512',
          cream: '#F5F2ED',
          'warm-gray': '#EDE8E0',
          stone: '#C4B8A8',
          gold: '#BFA46F',
          'gold-light': '#D4C4A1',
          'gold-dark': '#9A8050',
          text: '#1C1A17',
          'text-muted': '#5C564E',
          'text-light': '#F5F2ED',
          border: '#D4C9B8',
          'border-light': '#E8E2D8',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-product': '0.08em',
      }
    },
  },
  plugins: [],
}
