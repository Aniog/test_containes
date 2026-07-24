/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0f0f0f',
          charcoal: '#1a1a1a',
          'dark-gray': '#2a2a2a',
          ivory: '#f8f5f0',
          cream: '#f0ece4',
          'warm-white': '#faf8f5',
          gold: '#c4a265',
          'gold-light': '#d4b67a',
          'gold-dark': '#a68a4e',
          'gold-muted': '#b89b5c',
          'divider-light': '#e8e0d4',
          'divider-dark': '#333333',
          'muted-light': '#8a8278',
          'muted-dark': '#a0998f',
          'text-dark': '#1a1a1a',
          'text-light': '#f0ece4',
        },
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-1': ['2.75rem', { lineHeight: '1.15' }],
        'heading-2': ['2rem', { lineHeight: '1.2' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
