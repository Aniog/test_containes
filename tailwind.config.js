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
        'velmora-gold-light': '#E8DCC4',
        'velmora-sage': '#8B9A7D',
        'velmora-rose': '#C9A5A0',
        'velmora-warm-gray': '#6B6560',
        'velmora-light-gray': '#F0EDE8',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
        'wider': '0.1em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 26, 26, 0.08)',
        'soft-hover': '0 8px 30px rgba(26, 26, 26, 0.12)',
      },
    },
  },
  plugins: [],
}
