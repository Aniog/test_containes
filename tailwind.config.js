/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#1C1917',
        gold: '#B8860B',
        'gold-dark': '#996F09',
        taupe: '#E8E2DA',
        'warm-gray': '#78716C',
        ivory: '#FFFDF9',
        espresso: '#292524',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-sm': '0.05em',
      },
    },
  },
  plugins: [],
}
