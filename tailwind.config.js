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
        cream: '#FAF7F2',
        espresso: '#2C2420',
        charcoal: '#1A1A1A',
        warmgray: '#6B6560',
        gold: '#C9A227',
        golddark: '#B8860B',
        divider: '#E5E0D8',
        stonebg: '#F0EBE3',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
