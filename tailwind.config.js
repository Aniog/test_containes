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
        ivory: '#F5F0EB',
        gold: '#C9A96E',
        'gold-hover': '#B8944F',
        'gold-light': '#E8D5B0',
        charcoal: '#1C1917',
        divider: '#E7E0D8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-custom': '0.08em',
      },
    },
  },
  plugins: [],
}
