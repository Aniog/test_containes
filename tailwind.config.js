/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          espresso: '#211611',
          ink: '#2e241d',
          ivory: '#f7f1ea',
          pearl: '#efe4d6',
          sand: '#d8c3ac',
          gold: '#d8b17b',
          'gold-soft': '#e4c89e',
          'gold-deep': '#9a6f3a',
          muted: '#6e6054',
          border: '#d8c6b4',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px rgba(53, 40, 31, 0.08)',
        elevated: '0 30px 60px rgba(28, 20, 15, 0.16)',
      },
    },
  },
  plugins: [],
}
