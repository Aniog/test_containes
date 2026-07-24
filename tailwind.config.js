/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — deep obsidian base + warm champagne gold accents
        obsidian: '#1A1714',
        'obsidian-light': '#2C2825',
        'obsidian-mid': '#3D3830',
        parchment: '#F5F0E8',
        'parchment-dark': '#EDE6D6',
        champagne: '#C9A96E',
        'champagne-light': '#DFC08A',
        'champagne-pale': '#F0E0C0',
        ivory: '#FAF7F2',
        'warm-gray': '#8C8278',
        'warm-gray-light': '#B5AFA8',
        blush: '#E8D5C4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
