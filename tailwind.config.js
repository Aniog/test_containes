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
          base: '#1c1917',
          cream: '#faf8f5',
          gold: '#c9a96e',
          'gold-dark': '#b08d55',
          sand: '#f2efe9',
          stone: '#8c857b',
          warm: '#e8e2d9',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
