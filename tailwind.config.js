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
        cream: '#F5F0EB',
        espresso: '#1A1714',
        taupe: '#6B5E50',
        gold: {
          DEFAULT: '#B8956A',
          light: '#C9A96E',
          dark: '#A37D56',
          muted: '#D4C4A8',
        },
        sand: '#E8E0D6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
    },
  },
  plugins: [],
}
