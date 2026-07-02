/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5F0',
        'warm-white': '#FAF8F5',
        charcoal: '#1C1917',
        'deep-brown': '#292524',
        'warm-gray': '#78716C',
        'light-gray': '#D6D3D1',
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
          muted: '#C9A96E',
          pale: '#E8D5A3',
        },
        accent: '#8B6914',
        'accent-light': '#A67C1A',
        border: '#E7E5E4',
        'border-dark': '#44403C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.15' }],
        'heading': ['1.75rem', { lineHeight: '1.2' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.8125rem', { lineHeight: '1.5' }],
        'overline': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
