/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#1A1714',
        'warm-charcoal': '#2A2520',
        'warm-cream': '#F5F0E8',
        'ivory': '#FAF7F2',
        'gold': '#C9A96E',
        'gold-light': '#D4BA8A',
        'gold-dark': '#A88B52',
        'warm-gray': '#8A8279',
        'warm-gray-light': '#B5AFA7',
        'divider': '#3A3530',
        'divider-light': '#E8E2D8',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'wider-product': '0.15em',
        'wider-btn': '0.08em',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
