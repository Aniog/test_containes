/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian:   '#1A1714',
        parchment:  '#F7F3EE',
        ivory:      '#FDFAF6',
        linen:      '#EDE8E1',
        gold:       '#C9A96E',
        'gold-light': '#D4B87A',
        'gold-dark':  '#B8935A',
        muted:      '#8C7B6B',
        divider:    '#E2DDD7',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'Inter', 'sans-serif'],
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
