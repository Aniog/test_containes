/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1C1917',
        cream: '#FAF7F2',
        gold: '#C9A96E',
        'gold-light': '#D4BA8A',
        'gold-dark': '#B8944F',
        muted: '#78716C',
        border: '#E7E0D6',
        card: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'section': '0.2em',
        'wide-custom': '0.08em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
