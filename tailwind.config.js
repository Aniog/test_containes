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
        charcoal:   '#1C1917',
        'warm-gray':'#6B6560',
        gold:       '#C9A96E',
        'gold-light':'#E8D5B0',
        'gold-dark': '#A07840',
        stone:      '#D6CFC4',
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
