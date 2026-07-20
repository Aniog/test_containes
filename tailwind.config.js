/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1814',
        secondary: '#6B635A',
        accent: '#C9A962',
        'accent-hover': '#B8954F',
        background: '#FAF9F7',
        'card-bg': '#FFFFFF',
        border: '#E8E5E0',
        'text-light': '#FAF9F7',
        success: '#4A7C59',
        error: '#A65D57',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(26, 24, 20, 0.06)',
        'hover': '0 8px 30px rgba(26, 24, 20, 0.1)',
        'card': '0 2px 12px rgba(26, 24, 20, 0.04)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      letterSpacing: {
        'widest': '0.15em',
        'wide': '0.1em',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
