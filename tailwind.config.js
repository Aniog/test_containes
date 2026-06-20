/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0f0f0f',
          charcoal: '#1a1a1a',
          warm: '#2a2520',
          gold: '#c9a96e',
          'gold-light': '#e2cfa0',
          'gold-dark': '#a6843d',
          cream: '#f7f4ef',
          sand: '#ede6db',
          muted: '#8c857b',
          border: '#e3ddd3',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.28em',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(15, 15, 15, 0.12)',
        glow: '0 0 0 1px rgba(201, 169, 110, 0.35)',
      },
      transitionTimingFunction: {
        'velmora': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
