/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F7',
        'cream-dark': '#F5F3EF',
        charcoal: '#1A1815',
        'charcoal-light': '#6B6560',
        gold: '#C9A962',
        'gold-hover': '#B8954F',
        border: '#E5E0D8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '4rem', fontWeight: '500' }],
        'h1': ['2.5rem', { lineHeight: '3rem', fontWeight: '500' }],
        'h2': ['2rem', { lineHeight: '2.5rem', fontWeight: '500' }],
        'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '500' }],
        'product': ['1rem', { lineHeight: '1.5rem', fontWeight: '500', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 24, 21, 0.08)',
        'card': '0 8px 30px rgba(26, 24, 21, 0.12)',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
