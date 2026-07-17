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
          bg: '#F7F3EE',
          surface: '#FFFFFF',
          text: '#1A1714',
          muted: '#6B6258',
          sand: '#9E958B',
          accent: '#A15D4E',
          'accent-hover': '#8A4E41',
          gold: '#C9A86C',
          hairline: '#E7E0D7',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
      transitionTimingFunction: {
        'out-editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
