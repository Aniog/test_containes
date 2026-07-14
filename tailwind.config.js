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
        sans: ['"Inter"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#F6F3EE',
          surface: '#FFFFFF',
          ink: '#1C1917',
          muted: '#78716C',
          subtle: '#A8A29E',
          divider: '#E7E5E4',
          accent: '#B8860B',
          accentHover: '#9A7209',
          warm: '#F5F0E8',
          dark: '#1C1917',
        }
      },
      letterSpacing: {
        widest: '0.28em',
      }
    },
  },
  plugins: [],
}
