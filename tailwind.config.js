/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAF8F5',
        ivory: '#F5F1EC',
        champagne: '#E8E0D4',
        gold: {
          DEFAULT: '#C5A55A',
          dark: '#A88B3D',
          light: '#D4BC7A',
          muted: '#E8D9B0',
        },
        charcoal: '#1A1611',
        slate: '#6B6258',
        'warm-gray': '#8A7E6F',
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'heading': ['2.5rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(26, 22, 17, 0.06)',
        'medium': '0 4px 30px rgba(26, 22, 17, 0.1)',
        'glow': '0 0 40px rgba(197, 165, 90, 0.15)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
