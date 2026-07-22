/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:         '#FAF6F0',
        'cream-dark':  '#F2EBE0',
        charcoal:      '#1C1917',
        'charcoal-soft': '#2D2926',
        'warm-gray':   '#7A7068',
        'warm-gray-lt':'#B5AFA8',
        gold:          '#C4973A',
        'gold-light':  '#D4AA5A',
        'gold-pale':   '#EDD9A3',
        ivory:         '#FFFDF9',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.20em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
