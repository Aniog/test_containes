/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          'bg-primary': '#0D0D0D',
          'bg-secondary': '#1A1A1A',
          'bg-card': '#242424',
          'text-primary': '#F5F5F0',
          'text-secondary': '#A8A8A0',
          'accent': '#C9A962',
          'accent-hover': '#D4B978',
          'border': '#333333',
          'success': '#4A7C59',
          'error': '#B85450',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
      maxWidth: {
        'container': '1400px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.3)',
        'card': '0 2px 12px rgba(0,0,0,0.2)',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
