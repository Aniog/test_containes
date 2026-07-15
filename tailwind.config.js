/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          cream: '#FAF7F2',
          sand: '#F3EDE3',
          dark: '#1C1917',
          charcoal: '#292524',
          warm: '#78716C',
          muted: '#A8A29E',
          gold: '#B48A3F',
          goldLight: '#D4B16A',
          goldDark: '#8C6B2E',
          white: '#FFFFFF',
        },
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
