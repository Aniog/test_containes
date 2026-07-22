/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        'ivory-dark': '#F2EDE4',
        obsidian: '#1A1714',
        'obsidian-light': '#2E2A26',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-pale': '#F0E4C8',
        mink: '#8A7968',
        'mink-light': '#B5A898',
        stone: '#E8E2D9',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.2em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
