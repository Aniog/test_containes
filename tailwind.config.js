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
          'surface': '#FFFFFF',    // Pure white surfaces
          'text': '#2C2522',       // Deep warm brown text
          'text-muted': '#6B5F57', // Muted text
          'accent': '#B8860B',     // Warm antique gold
          'accent-dark': '#8B6914',// Darker gold for hover
          'border': '#E5DFD3',     // Warm beige border
          'gold': '#C5A46E',       // Soft gold highlight
          'gold-light': '#D4B896', // Lighter gold
        },
      },
      letterSpacing: {
        'widest': '0.15em',
        'ultra': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
