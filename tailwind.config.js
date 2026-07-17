/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-noir': '#221d19',
        'brand-ink': '#2d241e',
        'brand-mist': '#7f7268',
        'brand-line': '#d9cec0',
        'brand-ivory': '#fbf7f0',
        'brand-surface': '#f6efe6',
        'brand-champagne': '#efe2d1',
        'brand-gold': '#c8a46a',
        'brand-gold-soft': '#d6b884',
        'brand-cream': '#f7f0e8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px -30px rgba(34, 29, 25, 0.24)',
        luxe: '0 28px 80px -40px rgba(34, 29, 25, 0.42)',
      },
    },
  },
  plugins: [],
}
