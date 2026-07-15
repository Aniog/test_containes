/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — warm editorial luxury
        velvet:   '#1a1410',   // near-black warm base
        obsidian: '#0f0d0b',   // deepest bg
        ivory:    '#f7f3ec',   // warm off-white bg
        cream:    '#ede8df',   // slightly deeper cream
        parchment:'#d9d2c5',   // muted warm divider
        gold:     '#c9a96e',   // primary accent — warm gold
        'gold-light': '#e0c98a', // lighter gold hover
        'gold-dark':  '#a8854a', // deeper gold pressed
        mink:     '#8a7f72',   // secondary text warm gray
        charcoal: '#3d3530',   // body text
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
