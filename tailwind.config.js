/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#241915',
        mocha: '#4b3a30',
        parchment: '#f4ede4',
        ivory: '#fbf7f2',
        gold: '#c8a06a',
        champagne: '#e3d3bf',
        taupe: '#a28b76',
        olive: '#6a6b55',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.22em',
      },
      boxShadow: {
        veil: '0 24px 80px rgba(36, 25, 21, 0.08)',
        card: '0 18px 40px rgba(36, 25, 21, 0.06)',
      },
    },
  },
  plugins: [],
}
