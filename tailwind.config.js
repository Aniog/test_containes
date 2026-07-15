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
        'velmora-sand': '#F0EBE3',
        'velmora-muted': '#8B8680',
        'velmora-white': '#FFFFFF',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
