/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink':        '#1A1714',
        'velmora-cream':      '#FAF7F2',
        'velmora-gold':       '#C9A96E',
        'velmora-gold-light': '#E8D5B0',
        'velmora-muted':      '#8C7B6B',
        'velmora-stone':      '#F0EBE3',
        'velmora-charcoal':   '#3D3530',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      boxShadow: {
        'card':       '0 2px 20px rgba(26,23,20,0.06)',
        'card-hover': '0 8px 40px rgba(26,23,20,0.12)',
        'drawer':     '-4px 0 40px rgba(26,23,20,0.15)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
