/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:      '#FAF7F2',
        cream:      '#F2EDE4',
        parchment:  '#E8E0D4',
        stone:      '#8A8178',
        charcoal:   '#2C2825',
        ink:        '#1A1714',
        gold:       '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark':  '#A8854A',
        blush:      '#F0E8DC',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
