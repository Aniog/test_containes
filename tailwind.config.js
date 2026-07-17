/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1A1714',
        ivory: '#FAF7F2',
        champagne: '#C9A96E',
        'champagne-light': '#E8D5A3',
        'champagne-dark': '#A07840',
        stone: '#8C7B6B',
        parchment: '#F0EAE0',
        mist: '#D6CFC4',
        charcoal: '#3D3530',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.3em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
