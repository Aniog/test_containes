/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian:       '#1a1614',
        ivory:          '#f8f4ef',
        champagne:      '#c9a96e',
        'champagne-light': '#e8d5b0',
        'stone-warm':   '#8c7b6b',
        parchment:      '#f0e8dc',
        'obsidian-soft':'#2e2825',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
