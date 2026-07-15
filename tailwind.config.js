/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#1A1714',
        'warm-cream': '#FAF7F2',
        'antique-white': '#F5F0E8',
        'champagne-gold': '#C9A96E',
        'deep-gold': '#A8853A',
        'light-gold': '#E8D5A8',
        'warm-gray': {
          100: '#E8E3DC',
          200: '#D4CFC7',
          300: '#B5AFA7',
          400: '#8F8A82',
          500: '#6B635A',
          600: '#524C45',
          700: '#3D3832',
          800: '#2A2621',
          900: '#1A1714',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'super-wide': '0.15em',
      },
    },
  },
  plugins: [],
}
