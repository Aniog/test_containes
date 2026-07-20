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
        // Quiet luxury palette - warm neutrals with gold accents
        'velmora': {
          'bg': '#F8F5F1',        // Warm cream background
          'surface': '#F4F0E9',   // Slightly warmer surface
          'text': '#2C2522',      // Deep warm brown for text
          'text-light': '#5C5249', // Muted text
          'gold': '#B89778',      // Warm refined gold
          'gold-dark': '#8C6F52', // Darker gold for hover
          'gold-light': '#D4C4A8', // Light gold accent
          'accent': '#9A7B5C',    // Muted bronze accent
          'border': '#D9D0C3',    // Hairline border
          'white': '#FFFFFF',
          'black': '#1A1715',
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
