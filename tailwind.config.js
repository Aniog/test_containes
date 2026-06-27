/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-black': '#1a1a1a',
        'velmora-cream': '#faf8f5',
        'velmora-gold': '#c9a96e',
        'velmora-gold-light': '#d4b87a',
        'velmora-charcoal': '#4a4a4a',
        'velmora-sand': '#e8e0d5',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
