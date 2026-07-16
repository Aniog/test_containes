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
        taupe: '#6B6258',
        'warm-gold': '#B8860B',
        'muted-gold': '#D4A853',
        'warm-beige': '#E8E3DC',
        'dark-forest': '#1A1A1A',
        'warm-gray': '#C4BEB6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
      },
    },
  },
  plugins: [],
}
