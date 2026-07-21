/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          'black':    '#1A1714',
          'charcoal': '#2C2824',
          'warm':     '#3E3830',
          'muted':    '#8B8278',
          'gold':     '#C4953A',
          'gold-light':'#D4AD5A',
          'ivory':    '#FAF7F2',
          'cream':    '#F5F0EA',
          'surface':  '#FFFFFF',
        }
      },
      fontFamily: {
        'serif':  ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans':   ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['5rem',   { lineHeight: '1.05', letterSpacing: '0.01em' }],
        'h1':      ['3.5rem', { lineHeight: '1.1' }],
        'h2':      ['2.75rem',{ lineHeight: '1.15' }],
        'h3':      ['1.5rem', { lineHeight: '1.3' }],
        'body':    ['1rem',   { lineHeight: '1.6' }],
        'small':   ['0.875rem',{lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'lux': '0 2px 20px rgba(26,23,20,0.08)',
        'lux-lg': '0 8px 40px rgba(26,23,20,0.12)',
      },
    },
  },
  plugins: [],
}
