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
          ink: '#241B17',
          espresso: '#3B2A22',
          cream: '#F7F1E8',
          porcelain: '#FFFDF8',
          mist: '#E8DED0',
          sand: '#CDBFAE',
          gold: '#B88A4A',
          'gold-dark': '#8A6435',
          blush: '#E9D3C2',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(36, 27, 23, 0.10)',
        glow: '0 18px 50px rgba(184, 138, 74, 0.22)',
      },
      letterSpacing: {
        luxe: '0.24em',
      },
    },
  },
  plugins: [],
}
