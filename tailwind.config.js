/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1714',
        ivory: '#faf7f2',
        gold: {
          DEFAULT: '#c9a96e',
          dark: '#b8923f',
          light: '#dfc595',
        },
        cream: '#f5f0e8',
        'rose-gold': '#d4a574',
        'warm-gray': '#8a8279',
        divider: '#e8e2d8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.15em',
        'widest-2xl': '0.2em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '600' }],
        'heading': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(26, 23, 20, 0.06)',
        'card-hover': '0 8px 30px rgba(26, 23, 20, 0.12)',
        'drawer': '0 0 40px rgba(26, 23, 20, 0.15)',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
