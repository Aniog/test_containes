/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink':          '#1C1917',
        'velmora-espresso':     '#2C2420',
        'velmora-gold':         '#C9A96E',
        'velmora-gold-light':   '#E8D5A3',
        'velmora-cream':        '#FAF7F2',
        'velmora-parchment':    '#F0EAE0',
        'velmora-stone':        '#8A8178',
        'velmora-divider':      '#E2D9CE',
        'velmora-divider-dark': '#3A3330',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-lg': '0.15em',
        'widest-md': '0.12em',
        'widest-sm': '0.1em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
