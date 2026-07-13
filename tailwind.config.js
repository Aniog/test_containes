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
        charcoal: '#2C2825',
        stone: '#4A4540',
        ivory: '#FAF7F2',
        linen: '#F2EDE5',
        sand: '#E8DFD0',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        'ink-muted': '#6B6259',
        'ink-faint': '#9C9189',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.3em',
      },
      boxShadow: {
        card: '0 2px 20px rgba(26,23,20,0.06)',
        'card-hover': '0 8px 32px rgba(26,23,20,0.12)',
        drawer: '-4px 0 40px rgba(26,23,20,0.15)',
      },
      transitionDuration: {
        350: '350ms',
      },
    },
  },
  plugins: [],
}
