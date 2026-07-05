/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#F9F7F4',
        'velmora-charcoal': '#1A1A1A',
        'velmora-gold': '#C9A962',
        'velmora-gold-light': '#E5D4A1',
        'velmora-gold-dark': '#A68B4B',
        'velmora-warm': '#F5EDE4',
        'velmora-sage': '#9CAF88',
        'velmora-rose': '#D4A5A5',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
        'ultra-wide': '0.35em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'soft-hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
