/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ember:    '#C0392B',
        wheat:    '#F5E6C8',
        crust:    '#8B5E3C',
        charcoal: '#1C1C1C',
        cream:    '#FFFDF7',
        smoke:    '#6B6B6B',
        ash:      '#F0EBE1',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
