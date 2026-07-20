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
          charcoal: '#1C1917',
          cream: '#FAF7F2',
          gold: '#C9A96E',
          'gold-dark': '#B8964F',
          ivory: '#F5F0E8',
          muted: '#78716C',
          hairline: '#E7E0D5',
          border: '#D6CFC4',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'ultra-wider': '0.15em',
      },
    },
  },
  plugins: [],
}
