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
        'warm-white': '#FFFDF9',
        ivory: '#F5F0E8',
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6560',
        'light-gray': '#E8E4DE',
        gold: '#C9A962',
        'gold-dark': '#A88B4A',
        'gold-light': '#E5D4A8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'product': '0.12em',
        'ui': '0.08em',
        'button': '0.1em',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 26, 26, 0.06)',
        'soft-lg': '0 8px 30px rgba(26, 26, 26, 0.08)',
      },
    },
  },
  plugins: [],
}
