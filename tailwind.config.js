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
        charcoal: '#1A1814',
        taupe: '#6B635A',
        gold: '#C9A962',
        'gold-hover': '#B8954F',
        divider: '#E8E4DF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'product': ['18px', { lineHeight: '1.4', letterSpacing: '0.15em', fontWeight: '500' }],
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
      boxShadow: {
        'card': '0 20px 40px rgba(26, 24, 20, 0.08)',
        'button': '0 4px 12px rgba(201, 169, 98, 0.25)',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
