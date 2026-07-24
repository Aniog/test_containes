/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        gold: {
          DEFAULT: '#C79A5E',
          hover: '#B8894D',
          light: '#D4B483',
        },
        'warm-brown': '#1A1A1A',
        'warm-gray': {
          DEFAULT: '#6B6358',
          light: '#9C9488',
        },
        'warm-border': '#E8E2D8',
        'warm-border-light': '#F0EBE4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widewide: '0.08em',
        widest: '0.12em',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1' }],
        'heading-1': ['2.5rem', { lineHeight: '1.15' }],
        'heading-2': ['1.75rem', { lineHeight: '1.2' }],
        'heading-3': ['1.25rem', { lineHeight: '1.3' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
