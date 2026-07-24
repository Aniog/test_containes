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
          espresso: '#17110d',
          ivory: '#f7f0e6',
          porcelain: '#fffaf2',
          champagne: '#c8a46d',
          antique: '#8b6b3f',
          cocoa: '#31251f',
          taupe: '#7c6d62',
          clay: '#d7b7a0',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        product: '4 / 5',
        reel: '9 / 16',
        editorial: '3 / 4',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(23, 17, 13, 0.14)',
        soft: '0 16px 50px rgba(49, 37, 31, 0.1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease both',
      },
    },
  },
  plugins: [],
}
