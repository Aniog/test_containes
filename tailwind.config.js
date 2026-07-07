/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1614',
        'velmora-ivory': '#FAF7F2',
        'velmora-cream': '#F2EDE4',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E8D5A3',
        'velmora-gold-dark': '#A07840',
        'velmora-mink': '#8B7355',
        'velmora-stone': '#D4C9B8',
        'velmora-charcoal': '#3D3530',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'product': '0.15em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
      },
    },
  },
  plugins: [],
}
