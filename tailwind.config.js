/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pearl: '#f7f1e8',
        surface: '#efe5d7',
        champagne: '#d8c6ae',
        gold: '#b38a46',
        truffle: '#241915',
        espresso: '#312620',
        mocha: '#6e5d4d',
        mist: '#c8b39a',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      aspectRatio: {
        product: '4 / 5',
        portrait: '9 / 16',
        tile: '3 / 4',
        editorial: '16 / 10',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(49, 38, 32, 0.08)',
        card: '0 18px 36px rgba(49, 38, 32, 0.07)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      backgroundImage: {
        'velmora-radial': 'radial-gradient(circle at top, rgba(216, 198, 174, 0.28), transparent 48%)',
      },
    },
  },
  plugins: [],
}
