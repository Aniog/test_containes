/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        velmora: {
          cream: '#F6F3EF',
          espresso: '#1A1512',
          taupe: '#6B6259',
          gold: '#C49A6C',
          'gold-dark': '#A67C52',
          sand: '#F0EAE3',
          divider: '#E4DDD4',
          'muted-text': '#CFC7BC',
        },
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
