/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        ivory: '#F5F0EB',
        charcoal: '#1A1A1A',
        muted: '#6B6560',
        gold: '#B8860B',
        'gold-dark': '#9A7209',
        'gold-light': '#F5ECD7',
        'border-warm': '#E8E2DB',
        dark: '#1A1A1A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
      },
    },
  },
  plugins: [],
}
