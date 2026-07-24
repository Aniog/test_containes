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
          bg: '#FAF8F5',
          surface: '#FFFFFF',
          'surface-hover': '#F5F0EB',
          text: '#1A1A1A',
          'text-secondary': '#6B6358',
          'text-light': '#9A948C',
          gold: '#C9A96E',
          'gold-dark': '#A68A4B',
          'gold-light': '#E8D5A8',
          'gold-muted': '#F5EDD8',
          border: '#E8E0D6',
          'border-dark': '#D4C8B8',
          overlay: 'rgba(26, 26, 26, 0.5)',
          success: '#4A7C59',
          error: '#C44536',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'nav': '0.08em',
        'heading': '0.04em',
      },
      boxShadow: {
        'velmora-subtle': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'velmora-medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'velmora-elevated': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'velmora-gold': '0 4px 16px rgba(201, 169, 110, 0.2)',
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
      maxWidth: {
        'container': '1280px',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      }
    },
  },
  plugins: [],
}
