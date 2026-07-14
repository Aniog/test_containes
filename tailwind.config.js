/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#241c1b',
          surface: '#f7f1ea',
          ivory: '#fffaf5',
          champagne: '#efe4d6',
          gold: '#c8a96b',
          taupe: '#8e7663',
          muted: '#6f5d51',
          line: '#d6c6b6',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(36, 28, 27, 0.08)',
        card: '0 24px 60px rgba(36, 28, 27, 0.10)',
        luxe: '0 30px 90px rgba(36, 28, 27, 0.22)',
      },
    },
  },
  plugins: [],
}
