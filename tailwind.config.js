/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#FAF9F7',
          light: '#F5F3EF',
          black: '#1A1814',
          gray: '#6B635A',
          gold: '#C9A962',
          'gold-hover': '#B8954F',
          border: '#E8E4DE',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'product': ['18px', { lineHeight: '24px', letterSpacing: '0.1em', fontWeight: '500' }],
      },
      boxShadow: {
        'card-hover': '0 20px 40px rgba(26, 24, 20, 0.08)',
        'button': '0 4px 12px rgba(201, 169, 98, 0.25)',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
