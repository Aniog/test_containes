/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#191412',
        truffle: '#4f4138',
        taupe: '#8c7a6b',
        sand: '#d9ccbe',
        champagne: '#c6a072',
        porcelain: '#f7f1e8',
        pearl: '#fffaf4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        brand: '0.28em',
        product: '0.22em',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(25, 20, 18, 0.08)',
        card: '0 14px 36px rgba(25, 20, 18, 0.08)',
      },
      aspectRatio: {
        product: '4 / 5',
        portrait: '9 / 16',
      },
    },
  },
  plugins: [],
}
