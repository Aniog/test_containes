/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F5F5F7',
        'paper-dark': '#D1D1D5',
        'paper-mid': '#E8E8EC',
        'paper-light': '#FFFFFF',
        ink: '#1A1A1A',
        'ink-muted': '#6B6B6B',
        'ink-faint': '#A8A8A8',
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        copper: '#B87333',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neu': '6px 6px 12px #D1D1D5, -6px -6px 12px #FFFFFF',
        'neu-sm': '3px 3px 6px #D1D1D5, -3px -3px 6px #FFFFFF',
        'neu-lg': '10px 10px 20px #D1D1D5, -10px -10px 20px #FFFFFF',
        'neu-pressed': 'inset 4px 4px 8px #D1D1D5, inset -4px -4px 8px #FFFFFF',
        'neu-pressed-sm': 'inset 2px 2px 5px #D1D1D5, inset -2px -2px 5px #FFFFFF',
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.4em',
      },
    },
  },
  plugins: [],
}
