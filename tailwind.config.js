/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-charcoal': '#1C1C1E',
        'velmora-ivory': '#FAF7F2',
        'velmora-cream': '#F3EDE4',
        'velmora-gold': '#C5A265',
        'velmora-gold-light': '#D4B87A',
        'velmora-warm-gray': '#8A817C',
        'velmora-border': '#E5DDD3',
        'velmora-muted': '#6E6863',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
