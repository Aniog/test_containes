/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        espresso: '#1C1410',
        gold: '#C9A96E',
        'gold-light': '#E8D5B0',
        'gold-pale': '#F5EDD8',
        taupe: '#6B5E52',
        linen: '#EDE8E1',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.08em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
