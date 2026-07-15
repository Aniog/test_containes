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
          cream: '#FAF6F1',
          sand: '#F2EBE2',
          stone: '#E8DFD3',
          taupe: '#C4B8A8',
          ink: '#1C1C1C',
          charcoal: '#2D2D2D',
          warm: '#8B7355',
          gold: '#BFA06B',
          goldlight: '#D4B896',
          ivory: '#FFFBF5',
          muted: '#7A7067',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widester: '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
