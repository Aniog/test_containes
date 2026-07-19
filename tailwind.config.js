/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAF9F7',
        secondary: '#1A1814',
        'text-primary': '#1A1814',
        'text-secondary': '#6B6560',
        'text-light': '#FAF9F7',
        'accent-gold': '#C9A962',
        'accent-gold-hover': '#B8954F',
        'border-divider': '#E8E5E0',
        'success': '#4A7C59',
        'error': '#A65D57',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '64px', fontWeight: '500' }],
        'h1': ['48px', { lineHeight: '56px', fontWeight: '500' }],
        'h2': ['40px', { lineHeight: '48px', fontWeight: '500' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '500' }],
        'product': ['18px', { lineHeight: '24px', fontWeight: '500', letterSpacing: '0.15em' }],
        'body': ['16px', { lineHeight: '26px' }],
        'small': ['14px', { lineHeight: '22px' }],
        'caption': ['12px', { lineHeight: '18px', fontWeight: '500', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(26, 24, 20, 0.08)',
        'hover': '0 8px 30px rgba(26, 24, 20, 0.12)',
        'button': '0 2px 8px rgba(201, 169, 98, 0.3)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
