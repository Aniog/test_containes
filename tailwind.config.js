/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F6F3EE',
          surface: '#FFFFFF',
          ink: '#1C1917',
          muted: '#78716C',
          subtle: '#A8A29E',
          line: '#E7E5E4',
          accent: '#B45309',
          'accent-hover': '#92400E',
          warm: '#F5F0E8',
          gold: '#C7A252',
          'gold-light': '#E6D5A7',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(28,25,23,0.25), rgba(28,25,23,0.55))",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
