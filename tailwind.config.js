/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#18110d',
          espresso: '#241812',
          ivory: '#f8f1e7',
          pearl: '#fffaf3',
          sand: '#dccab4',
          gold: '#c9a15b',
          champagne: '#dfbf7a',
          bronze: '#7b5a33',
          blush: '#ead8cc',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ui: '0.16em',
        product: '0.18em',
        logo: '0.22em',
      },
      boxShadow: {
        velmora: '0 18px 50px rgba(24, 17, 13, 0.08)',
        'velmora-lg': '0 28px 80px rgba(24, 17, 13, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 800ms ease-out both',
      },
    },
  },
  plugins: [],
}
