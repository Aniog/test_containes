/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans-custom': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'velmora': {
          'bg': '#F8F5F1',        // Warm cream background
          'surface': '#FFFFFF',    // Pure white
          'text': '#2C2522',       // Deep warm brown
          'text-light': '#6B6058', // Muted brown
          'accent': '#8B7355',     // Warm bronze/gold
          'accent-dark': '#5C4A38',// Darker bronze
          'gold': '#C5A46E',       // Soft gold
          'gold-dark': '#A68B5B',  // Darker gold
          'border': '#E5DFD6',     // Warm light border
          'border-dark': '#D4C9B8',// Darker border
        }
      },
      letterSpacing: {
        'widest': '0.15em',
        'ultra': '0.2em',
      }
    },
  },
  plugins: [],
}
