/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        ivory: '#F5F0E8',
        charcoal: '#1A1A1A',
        'warm-gray': '#6B6560',
        gold: '#C9A962',
        'gold-dark': '#A88B4A',
        'gold-light': '#E8D9B5',
        white: '#FFFFFF',
        error: '#C45C5C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'logo': ['28px', { lineHeight: '1.2', letterSpacing: '0.15em' }],
        'h1': ['56px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'h2': ['40px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'h3': ['28px', { lineHeight: '1.3', letterSpacing: '0.04em' }],
        'product': ['18px', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '1400px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(26, 26, 26, 0.06)',
        'medium': '0 4px 16px rgba(26, 26, 26, 0.08)',
        'elevated': '0 8px 32px rgba(26, 26, 26, 0.12)',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
    },
  },
  plugins: [],
}
