/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1C1714',
        cream: '#F7F2EA',
        sand: '#EDE4D6',
        gold: '#B08A4B',
        'gold-soft': '#C9A86A',
        charcoal: '#2A2520',
        stone: '#7A7268',
        hairline: '#E2D8C8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(28,23,20,0.25)',
        card: '0 18px 50px -28px rgba(28,23,20,0.35)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
