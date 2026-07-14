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
        'charcoal-light': '#2D2926',
        'warm-gray': '#6B6560',
        gold: '#C9A962',
        'gold-hover': '#B8954F',
        border: '#E8E4DE',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '64px', fontWeight: '500' }],
        'h1': ['48px', { lineHeight: '56px', fontWeight: '500' }],
        'h2': ['40px', { lineHeight: '48px', fontWeight: '500' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '500' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'product': ['16px', { lineHeight: '24px', fontWeight: '500', letterSpacing: '0.15em' }],
        'button': ['13px', { lineHeight: '20px', fontWeight: '500', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(26, 24, 21, 0.06)',
        'card-hover': '0 8px 30px rgba(26, 24, 21, 0.1)',
        'button': '0 4px 12px rgba(201, 169, 98, 0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
