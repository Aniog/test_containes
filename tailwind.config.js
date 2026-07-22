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
        creamLight: '#F3F1EE',
        charcoal: '#1A1918',
        gold: '#C9A962',
        goldHover: '#B8954A',
        goldLight: '#E8DCC4',
        warmGray: '#6B6560',
        muted: '#9A9590',
        border: '#E5E2DD',
        borderDark: '#3D3A37',
        success: '#4A7C59',
        error: '#A65D57',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.625rem', { lineHeight: '1.2' }],
        'h2': ['2rem', { lineHeight: '1.25' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.125rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(26, 25, 24, 0.06)',
        'cardHover': '0 8px 24px rgba(26, 25, 24, 0.1)',
        'button': '0 2px 8px rgba(201, 169, 98, 0.3)',
        'modal': '0 16px 48px rgba(26, 25, 24, 0.15)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      letterSpacing: {
        'product': '0.15em',
        'wide': '0.2em',
      },
    },
  },
  plugins: [],
}
