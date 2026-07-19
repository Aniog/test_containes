/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['Playfair Display', 'Georgia', 'serif'],
        'sans-custom': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          // Deep refined base - warm charcoal
          charcoal: '#0C0B09',
          // Warm cream for surfaces
          cream: '#F9F6F1',
          // Warm muted gold accent
          gold: '#B89778',
          // Dark text
          ink: '#1A1816',
          // Muted text
          muted: '#6B635C',
          // Soft taupe for borders
          taupe: '#C4B8A8',
          // Light surface
          surface: '#F5F2ED',
        }
      },
      letterSpacing: {
        'widest': '0.15em',
        'wider': '0.1em',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
