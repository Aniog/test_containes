/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velvet: '#221c23',
        'velvet-soft': '#362c35',
        ivory: '#f7f1ea',
        'ivory-deep': '#eadfce',
        gold: '#c7a36a',
        'gold-deep': '#9f7f4f',
        'rose-mist': '#c8b5b3',
        'sage-smoke': '#8f9a93',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(34, 28, 35, 0.08)',
      },
      letterSpacing: {
        product: '0.28em',
        eyebrow: '0.35em',
      },
    },
  },
  plugins: [],
}
