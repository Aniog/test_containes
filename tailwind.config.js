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
          gold: '#C9A84C',
          charcoal: '#2C2622',
          cream: '#FAF7F2',
          warm: '#F0EAE0',
          taupe: '#E8DFD5',
          muted: '#B8ADA0',
          'dark-text': '#2C2622',
          body: '#6B5E52',
          subtle: '#8A7F74',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
