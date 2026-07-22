/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-gold': '#C9A96E',
        'velmora-gold-dark': '#B08D4E',
        'velmora-gold-light': '#D4BC8A',
        'velmora-charcoal': '#1C1917',
        'velmora-cream': '#FAFAF9',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'wider-custom': '0.15em',
      },
    },
  },
  plugins: [],
}
