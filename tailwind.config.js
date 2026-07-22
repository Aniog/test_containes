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
        'champagne-light': '#E8D5B0',
        'champagne-dark': '#A07840',
        stone: '#8C7B6B',
        linen: '#EDE8E0',
        blush: '#F5EDE4',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.2em',
      },
      boxShadow: {
        card: '0 2px 20px rgba(26,23,20,0.06)',
        'card-hover': '0 8px 40px rgba(26,23,20,0.12)',
        drawer: '-4px 0 40px rgba(26,23,20,0.15)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
