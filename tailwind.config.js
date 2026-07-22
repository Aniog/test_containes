/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1C1C',
        cream: '#F5F0EB',
        gold: '#C9A96E',
        'gold-light': '#D4B87A',
        'gold-dark': '#A8864E',
        'text-dark': '#1C1C1C',
        'text-light': '#F5F0EB',
        'text-muted-dark': '#6B6B6B',
        'text-muted-light': '#A0A0A0',
        divider: '#E0D8CE',
        'divider-dark': '#3A3A3A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'ui': '0.1em',
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [],
}
