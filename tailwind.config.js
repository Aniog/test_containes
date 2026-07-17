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
        gold: '#B8975A',
        'gold-dark': '#9E7E42',
        'gold-light': '#D4B97A',
        charcoal: '#2C2C2C',
        'warm-gray': '#8B8580',
        sand: '#E8E3DC',
        'sand-light': '#F5F1EB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra': '0.3em',
      },
    },
  },
  plugins: [],
}
