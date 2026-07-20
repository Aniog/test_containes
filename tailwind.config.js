/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian':    '#1A1714',
        'velmora-charcoal':    '#2C2825',
        'velmora-stone':       '#3D3733',
        'velmora-linen':       '#F5F0E8',
        'velmora-cream':       '#FAF7F2',
        'velmora-sand':        '#E8DFD0',
        'velmora-gold':        '#C9A96E',
        'velmora-gold-light':  '#DFC08A',
        'velmora-gold-muted':  '#A8895A',
        'velmora-text-dark':   '#1A1714',
        'velmora-text-mid':    '#5C5248',
        'velmora-text-light':  '#F5F0E8',
        'velmora-text-muted':  '#9C8E82',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope:   ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn:       'fadeIn 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
        shimmer:      'shimmer 2s infinite linear',
      },
      boxShadow: {
        'gold-glow': '0 4px 24px rgba(201,169,110,0.15)',
        'card':      '0 2px 16px rgba(26,23,20,0.06)',
        'card-hover':'0 8px 32px rgba(26,23,20,0.12)',
      },
    },
  },
  plugins: [],
}
