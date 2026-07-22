/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1714',
        cream: '#FAF7F2',
        gold: '#C9A96E',
        'gold-dark': '#A88B52',
        'warm-gray': '#6B6560',
        sand: '#E8E2DA',
        linen: '#F0EBE4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-custom': '0.08em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
