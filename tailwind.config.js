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
          black: '#0D0D0D',
          soft: '#1A1A1A',
          surface: '#262626',
          white: '#F5F5F0',
          muted: '#A3A3A3',
          gold: '#C9A962',
          'gold-hover': '#D4B978',
          border: '#333333',
          success: '#4A7C59',
          error: '#9B4A4A',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '4rem', fontWeight: '500' }],
        'h1': ['2.5rem', { lineHeight: '3.25rem', fontWeight: '500' }],
        'h2': ['2rem', { lineHeight: '2.5rem', fontWeight: '500' }],
        'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '500' }],
        'h4': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'content': '1400px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.3)',
        'elevated': '0 8px 40px rgba(0,0,0,0.4)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      letterSpacing: {
        'product': '0.15em',
      },
    },
  },
  plugins: [],
}
