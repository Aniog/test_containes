/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        charcoal: '#1A1816',
        ivory: '#FAF8F5',
        gold: '#C9A962',
        bronze: '#A68B5B',
        // Neutral Colors
        taupe: '#E8E4DF',
        'warm-gray': '#6B6560',
        stone: '#3D3835',
        // Functional Colors
        success: '#7D9B76',
        error: '#B85C5C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }],
        'hero-mobile': ['2.25rem', { lineHeight: '1.2' }],
        'section': ['2.5rem', { lineHeight: '1.2' }],
        'section-mobile': ['1.75rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'elevated': '0 16px 48px rgba(0, 0, 0, 0.16)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      letterSpacing: {
        'widest': '0.15em',
        'product': '0.15em',
      },
      maxWidth: {
        'content': '1200px',
        'container': '1400px',
      },
    },
  },
  plugins: [],
}
