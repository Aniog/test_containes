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
        // Quiet luxury palette - warm, editorial, flatters gold
        'velmora': {
          'bg': '#F8F5F1',        // Warm cream background
          'surface': '#FFFFFF',    // Pure white surfaces
          'text': '#2C2522',       // Deep warm brown text
          'text-light': '#6B5F57', // Muted text
          'accent': '#B8865C',     // Warm bronze/gold accent
          'accent-dark': '#8B6644',// Darker bronze
          'gold': '#C5A46E',       // Soft gold
          'gold-dark': '#A68B5B',  // Darker gold
          'border': '#E5DFD6',     // Warm hairline border
          'border-dark': '#D4C9B9',// Darker border
          'overlay': 'rgba(44, 37, 34, 0.6)', // Dark overlay for hero
        }
      },
      letterSpacing: {
        'widest': '0.15em',
        'ultra': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
