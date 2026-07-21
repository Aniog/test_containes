/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#FAF7F2',
        'velmora-charcoal': '#1A1A1A',
        'velmora-gold': '#C9A962',
        'velmora-gold-light': '#E8D5A8',
        'velmora-gold-dark': '#9A7B3F',
        'velmora-warm-gray': '#6B6560',
        'velmora-light-gray': '#F0EDE8',
        'velmora-white': '#FFFFFF',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide': '0.1em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'hover': '0 8px 30px rgba(0,0,0,0.1)',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
