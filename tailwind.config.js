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
        parchment: '#F5F0E8',
        ivory: '#FAF7F2',
        champagne: '#C9A96E',
        'champagne-light': '#E8D5A3',
        'champagne-dark': '#A07840',
        'warm-stone': '#8C7B6B',
        charcoal: '#2D2926',
        divider: '#E2D9CC',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.12em',
        product: '0.15em',
      },
      transitionDuration: {
        400: '400ms',
        500: '500ms',
      },
    },
  },
  plugins: [],
}
