/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'velmora': {
          'bg': '#F8F5F1',        // Warm cream background
          'base': '#0F0E0C',      // Deep warm black
          'text': '#2C2823',      // Warm dark text
          'muted': '#6B6359',     // Muted text
          'gold': '#B8976A',      // Warm gold accent
          'gold-dark': '#8C6F4A', // Darker gold
          'gold-light': '#D4AF7A',// Light gold
          'cream': '#F5F2ED',     // Soft cream
          'taupe': '#9A8F7E',     // Soft taupe
          'border': '#E5DFD6',    // Hairline border
          'white': '#FFFFFF',
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
