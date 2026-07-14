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
          charcoal: '#1B1B1B',
          'charcoal-light': '#2A2A2A',
          cream: '#FAF7F2',
          'cream-dark': '#F0EBE3',
          gold: '#C9A96E',
          'gold-light': '#D4B87A',
          'gold-dark': '#B8944F',
          muted: '#6B6B6B',
          'text-dark': '#2D2D2D',
          'text-light': '#F0EDE6',
          'divider': '#E5E0D8',
          'divider-dark': '#3A3A3A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-md': ['1.75rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionTimingFunction: {
        'velmora': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
