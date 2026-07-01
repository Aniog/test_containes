/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          bg: '#F8F5F0',
          cream: '#F5F2ED',
          charcoal: '#1C1816',
          taupe: '#8B7D6B',
          gold: '#B89778',
          goldDark: '#8C6F4E',
          border: '#E5DFD6',
          muted: '#6B635C',
        },
      },
    },
  },
  plugins: [],
}
