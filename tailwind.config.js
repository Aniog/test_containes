/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'fill-gold',
    'fill-linen',
  ],
  theme: {
    extend: {
      colors: {
        velvet:    '#1C1410',
        cream:     '#F5F0E8',
        parchment: '#EDE5D8',
        gold:      '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark':  '#A8854A',
        mink:      '#6B5E4E',
        linen:     '#E0D5C5',
        'off-white': '#FAF7F2',
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
