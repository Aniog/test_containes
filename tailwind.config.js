/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory:        '#FAF7F2',
        obsidian:     '#1C1917',
        stone:        '#78716C',
        divider:      '#E8E2D9',
        gold:         '#B8965A',
        'gold-light': '#D4AF72',
        'gold-dark':  '#8B6E3A',
        blush:        '#F5EDE3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fadeUp:    'fadeUp 0.6s cubic-bezier(0.25,0.1,0.25,1) forwards',
        slideIn:   'slideIn 0.35s cubic-bezier(0.25,0.1,0.25,1) forwards',
        slideOut:  'slideOut 0.35s cubic-bezier(0.25,0.1,0.25,1) forwards',
      },
    },
  },
  plugins: [],
}
