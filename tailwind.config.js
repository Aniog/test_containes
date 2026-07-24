/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        charcoal: '#1a1814',
        ivory: '#f8f6f1',
        cream: '#faf8f5',
        sand: '#e8e4dd',
        // Accent palette
        gold: {
          DEFAULT: '#c9a962',
          dark: '#a68a4a',
          light: '#dfc88a',
        },
        // Text colors
        'charcoal-light': '#3d3830',
        'warm-gray': '#8a8478',
        stone: '#b5afa4',
        // Functional
        success: '#4a7c59',
        error: '#9c4a4a',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.2' }],
        'h3': ['1.75rem', { lineHeight: '1.25' }],
        'h4': ['1.25rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'overline': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(26, 24, 20, 0.05)',
        'md': '0 4px 12px rgba(26, 24, 20, 0.08)',
        'lg': '0 8px 24px rgba(26, 24, 20, 0.12)',
        'xl': '0 16px 48px rgba(26, 24, 20, 0.16)',
      },
      maxWidth: {
        'wide': '1440px',
        'content': '1200px',
        'narrow': '800px',
      },
      transitionDuration: {
        '200': '200ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
