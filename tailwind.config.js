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
          cream: '#F9F7F2',
          sand: '#F2EFE9',
          espresso: '#2A211C',
          ink: '#1A1614',
          stone: '#6B625B',
          gold: '#B9975B',
          'gold-hover': '#A8864D',
          divider: '#E2DDD5',
          error: '#B85C4E',
          success: '#6B8E6E',
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
