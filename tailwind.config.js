/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF7',
        cream: '#F5F0E8',
        charcoal: '#1A1A1A',
        warmBlack: '#2D2A26',
        gold: {
          DEFAULT: '#C9A962',
          hover: '#B8860B',
          muted: '#D4C4A8',
        },
        warmGray: '#6B6560',
        lightGray: '#E8E4DE',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'product': '0.15em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 26, 26, 0.06)',
        'card': '0 2px 12px rgba(26, 26, 26, 0.04)',
        'elevated': '0 8px 30px rgba(26, 26, 26, 0.08)',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
