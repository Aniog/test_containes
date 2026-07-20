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
          cream: '#FAF8F5',
          creamDark: '#F3EFE8',
          charcoal: '#1A1A1A',
          charcoalLight: '#2A2A2A',
          warmGray: '#6B6560',
          warmGrayLight: '#9A9590',
          gold: '#C9A96E',
          goldDark: '#B08C4F',
          goldLight: '#D9C49E',
          border: '#E5E0DA',
          borderDark: '#D0C9C0',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
