/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F7',
        gold: '#B8976A',
        'gold-dark': '#9A7B56',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        'text-muted': '#9A9A9A',
        divider: '#E8E5E1',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'wider': '0.1em',
      },
    },
  },
  plugins: [],
}
