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
        'velmora-sand': '#E8E2DA',
        'velmora-taupe': '#B8AFA3',
        'velmora-charcoal': '#2C2A26',
        'velmora-gold': '#C9A962',
        'velmora-goldLight': '#D4BC7D',
        'velmora-goldDark': '#A68B4B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(44, 42, 38, 0.08)',
        'soft-lg': '0 8px 30px rgba(44, 42, 38, 0.12)',
      },
    },
  },
  plugins: [],
}
