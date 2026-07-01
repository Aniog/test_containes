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
          // Deep warm charcoal base
          base: '#1C1917',
          // Warm ivory / cream background
          cream: '#F8F5F0',
          // Soft warm neutral
          ivory: '#F5F2ED',
          // Refined warm gold accent
          gold: '#B8976A',
          // Darker gold for hover/active
          'gold-dark': '#8B6F47',
          // Main text
          text: '#2C2825',
          // Muted text
          muted: '#6B635C',
          // Subtle borders
          border: '#E5DFD6',
          // Soft taupe
          taupe: '#8B8178',
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
