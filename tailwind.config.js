/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'sans-serif'],
      },
      colors: {
        velmora: {
          950: '#0f0a06',
          900: '#1a120c',
          800: '#2a1f14',
          700: '#3d2e1e',
          600: '#5a4430',
          500: '#7a6045',
          400: '#a0845f',
          300: '#c4a87a',
          200: '#dbc8a0',
          100: '#ede3cc',
          50: '#f7f2e8',
          gold: '#b8914a',
          'gold-light': '#d4b06a',
          'gold-dark': '#8a6b32',
          accent: '#c49b5e',
        },
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.15em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
