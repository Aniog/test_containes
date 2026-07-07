/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f6f3ef',
        ivory: '#faf8f5',
        charcoal: '#1c1a17',
        'warm-gray': '#6b6560',
        taupe: '#a69f98',
        gold: '#bfa06b',
        'gold-light': '#d4bc8b',
        'gold-dark': '#8f7345',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(28, 26, 23, 0.08)',
        glow: '0 0 24px rgba(191, 160, 107, 0.18)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
