/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1714',
        espresso: '#2A2520',
        ivory: '#F7F3EC',
        cream: '#EFE8DC',
        sand: '#E3D8C6',
        gold: '#B08A4B',
        'gold-deep': '#8A6A33',
        'gold-soft': '#C9A86A',
        charcoal: '#3A332C',
        muted: '#8A8074',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
