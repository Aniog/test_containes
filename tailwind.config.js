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
        'velmora-sand': '#F0EBE0',
        'velmora-muted': '#8A8A8A',
        'velmora-border': '#E5E0D8',
        'velmora-success': '#4A7C59',
        'velmora-error': '#A65D57',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'soft-hover': '0 8px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
