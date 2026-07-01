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
          bg: '#F8F5F0',
          'bg-alt': '#F5F2EB',
          text: '#1A1816',
          'text-muted': '#5C5650',
          'text-light': '#8B8178',
          gold: '#B89778',
          'gold-dark': '#9A7A5C',
          'gold-light': '#D4B896',
          border: '#E5DFD4',
          'border-light': '#EDE8DF',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
