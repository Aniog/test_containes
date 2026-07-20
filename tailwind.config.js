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
        'cream-dark': '#F5F0EB',
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
        'warm-charcoal': '#1A1A1A',
        'warm-gray': '#6B6258',
        beige: '#E5D9C5',
        'deep-dark': '#1C1C1C',
        'surface': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.15em',
      },
    },
  },
  plugins: [],
}
