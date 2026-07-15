/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette: deep charcoal base + warm champagne/gold accents
        velvet: {
          50:  '#faf8f5',
          100: '#f4efe6',
          200: '#e8dcc8',
          300: '#d9c5a0',
          400: '#c9a96e',
          500: '#b8924a',  // warm gold accent
          600: '#9e7a38',
          700: '#7d5f2b',
          800: '#5c4520',
          900: '#3a2b14',
        },
        obsidian: {
          50:  '#f5f4f2',
          100: '#e8e5e0',
          200: '#cdc8bf',
          300: '#aba49a',
          400: '#857d72',
          500: '#635c52',
          600: '#4a4440',
          700: '#332f2c',
          800: '#1e1c1a',
          900: '#0f0e0d',
        },
        champagne: '#e8d5b0',
        parchment: '#f7f3ec',
        cream: '#fdfaf5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease forwards',
        'slide-up':   'slideUp 0.5s ease forwards',
        'slide-right':'slideRight 0.4s ease forwards',
      },
      keyframes: {
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:   { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideRight:{ from: { opacity: 0, transform: 'translateX(-20px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
