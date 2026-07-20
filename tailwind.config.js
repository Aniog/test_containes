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
          gold: '#B8860B',
          'gold-light': '#D4A843',
          'gold-pale': '#F5ECD7',
          stone: {
            800: '#292524',
            600: '#57534E',
            400: '#A8A29E',
            200: '#E7E5E4',
          },
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'btn': '0.15em',
        'wide-custom': '0.08em',
      },
    },
  },
  plugins: [],
}
