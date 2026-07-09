/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#FAF7F2',
        'velmora-warm': '#F5EFE6',
        'velmora-sand': '#EBE0D0',
        'velmora-taupe': '#C8B89A',
        'velmora-gold': '#B8965E',
        'velmora-gold-dark': '#9A7B4A',
        'velmora-charcoal': '#1A1A1A',
        'velmora-dark': '#2D2D2D',
        'velmora-gray': '#6B6560',
        'velmora-light': '#F8F5F0',
        'velmora-border': '#E5DDD3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
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
