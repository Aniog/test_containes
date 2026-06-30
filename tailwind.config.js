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
        espresso: '#2C2420',
        ivory: '#FAF7F2',
        cream: '#F2EDE4',
        linen: '#E8E0D4',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        'text-primary': '#1A1714',
        'text-secondary': '#5C4F44',
        'text-muted': '#9C8E82',
        'text-inverse': '#FAF7F2',
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
        600: '600ms',
        700: '700ms',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26,23,20,0.06)',
        'card-hover': '0 8px 40px rgba(26,23,20,0.12)',
        'drawer': '-4px 0 40px rgba(26,23,20,0.15)',
      },
    },
  },
  plugins: [],
}
