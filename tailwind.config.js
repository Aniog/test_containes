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
          gold: '#B89450',
          'gold-light': '#D4B978',
          'gold-dark': '#9A7B3E',
          deep: '#1A1512',
          muted: '#78716C',
          border: '#E8E4DF',
          surface: '#FFFFFF',
          'surface-alt': '#F5F2ED',
          accent: '#C4A35A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
        wider: '0.25em',
        widest: '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
