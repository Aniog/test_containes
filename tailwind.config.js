/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-gold': '#b8965a',
        'velmora-gold-light': '#d4b77a',
        'velmora-cream': '#f5f0e8',
        'velmora-charcoal': '#2a2420',
        'velmora-warm-gray': '#d9d1c7',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.2em',
      },
    },
  },
  plugins: [],
}
