/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:       'rgb(var(--color-ivory) / <alpha-value>)',
        parchment:   'rgb(var(--color-parchment) / <alpha-value>)',
        stone:       'rgb(var(--color-stone) / <alpha-value>)',
        dusk:        'rgb(var(--color-dusk) / <alpha-value>)',
        umber:       'rgb(var(--color-umber) / <alpha-value>)',
        gold:        'rgb(var(--color-gold) / <alpha-value>)',
        'gold-light':'rgb(var(--color-gold-light) / <alpha-value>)',
        'gold-dark': 'rgb(var(--color-gold-dark) / <alpha-value>)',
        charcoal:    'rgb(var(--color-charcoal) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest:       '0.2em',
        'ultra-wide': '0.3em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
