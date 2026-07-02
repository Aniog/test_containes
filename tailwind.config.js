/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso:    '#1a1614',
        charcoal:    '#2d2825',
        'warm-white':'#faf7f2',
        cream:       '#f5f0e8',
        linen:       '#ede8df',
        gold:        '#c9a96e',
        'gold-light':'#e2c99a',
        'gold-dark': '#a8854a',
        ink:         '#1a1614',
        muted:       '#8a7f76',
        ghost:       '#b5aca4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionDuration: {
        250: '250ms',
      },
      boxShadow: {
        card:       '0 2px 20px rgba(26,22,20,0.06)',
        'card-hover':'0 8px 40px rgba(26,22,20,0.12)',
        drawer:     '-4px 0 40px rgba(26,22,20,0.15)',
      },
    },
  },
  plugins: [],
}

