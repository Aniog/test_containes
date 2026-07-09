/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-black': '#1A1A1A',
        'velmora-charcoal': '#2D2D2D',
        'velmora-cream': '#FAF7F2',
        'velmora-pearl': '#F5F0EB',
        'velmora-sand': '#E8E2D9',
        'velmora-stone': '#8A8580',
        'velmora-gold': '#C9A96E',
        'velmora-gold-muted': '#B8956A',
        'velmora-gold-light': '#D4B87C',
        'velmora-emerald': '#2D6A4F',
        'velmora-rose': '#C17767',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'nav': '0.1em',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}
