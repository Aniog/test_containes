/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: '#0F0F0F',
        surface: '#1A1A1A',
        elevated: '#242424',
        cream: '#F5F0E8',
        muted: '#A8A095',
        subtle: '#6B655C',
        gold: '#C8A97E',
        'gold-hover': '#D4B88F',
        sage: '#7A9E7E',
      },
      letterSpacing: {
        'widest': '0.15em',
        'ultra': '0.25em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
