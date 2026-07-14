/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#f6f1ea',
        'velmora-panel': '#221b18',
        'velmora-ink': '#241d1a',
        'velmora-gold': '#b58a54',
        'velmora-blush': '#e8ddd2',
        'velmora-soft': '#efe6dd',
        'velmora-line': '#d7c8b9',
        'velmora-muted': '#6c5f55',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 16px 40px rgba(36, 29, 26, 0.08)',
        luxury: '0 28px 70px rgba(36, 29, 26, 0.14)',
      },
      letterSpacing: {
        luxe: '0.24em',
      },
    },
  },
  plugins: [],
}
