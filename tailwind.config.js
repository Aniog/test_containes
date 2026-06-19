/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF7F2',
          warm: '#F0EBE3',
          gold: '#C8A45C',
          'gold-dark': '#B8924A',
          charcoal: '#1C1917',
          stone: '#787168',
          border: '#E5DDD4',
          muted: '#F0EBE3',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.1em',
      },
    },
  },
  plugins: [],
}
