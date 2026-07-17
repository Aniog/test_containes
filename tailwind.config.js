/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-bg': '#FDFBF7',
        'velmora-text': '#1A1A1A',
        'velmora-muted': '#4A4A4A',
        'velmora-accent': '#B59A6D',
        'velmora-beige': '#F2ECE4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
