/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#1c1412',
          cocoa: '#352825',
          bronze: '#8c6947',
          gold: '#d6b47a',
          'gold-soft': '#ebd1a3',
          'gold-deep': '#b88d4d',
          paper: '#f5efe8',
          ivory: '#fffaf5',
          panel: '#fcf7f2',
          blush: '#eee5db',
          line: '#dbcbbd',
          stone: '#6f6058',
          muted: '#9b8c82',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        card: '0 18px 40px rgba(28, 20, 18, 0.08)',
        luxe: '0 24px 60px rgba(28, 20, 18, 0.16)',
      },
    },
  },
  plugins: [],
}
