/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#171413',
        'velmora-panel': '#211d1b',
        'velmora-ivory': '#f6f0e8',
        'velmora-cream': '#efe6da',
        'velmora-gold': '#c8a66a',
        'velmora-gold-deep': '#9c7a45',
        'velmora-mist': '#cdbfb0',
        'velmora-stone': '#7f6f63',
        'velmora-line': '#d7cabd',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velmora: '0 20px 60px rgba(23, 20, 19, 0.10)',
        'velmora-soft': '0 12px 30px rgba(23, 20, 19, 0.08)',
      },
      letterSpacing: {
        velmora: '0.22em',
      },
    },
  },
  plugins: [],
}
