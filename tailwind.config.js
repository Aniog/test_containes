/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-bg': '#F6F2ED',
        'velmora-cream': '#FAF7F3',
        'velmora-charcoal': '#2A2420',
        'velmora-gold': '#BFA065',
        'velmora-gold-light': '#D4B87E',
        'velmora-gold-dark': '#9A7E4A',
        'velmora-warm': '#8C7B6B',
        'velmora-border': '#E5DDD3',
        'velmora-muted': '#9E948A',
        'velmora-accent': '#BFA065',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
