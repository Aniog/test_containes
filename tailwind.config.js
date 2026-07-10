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
        parchment: '#F5F0E8',
        linen: '#EDE7D9',
        sand: '#D4C9B5',
        gold: '#C9A96E',
        'gold-light': '#E2C98A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        muted: '#7A7068',
        whisper: '#A89E94',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        product: '0.15em',
        button: '0.12em',
      },
      boxShadow: {
        'gold-glow': '0 8px 32px rgba(201,169,110,0.12)',
        'gold-hover': '0 12px 40px rgba(201,169,110,0.2)',
        drawer: '-8px 0 40px rgba(26,23,20,0.15)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
