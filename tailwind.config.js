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
        'velmora': {
          'bg': '#0F0E0C',        // Deep warm black
          'bg-light': '#F8F5F0',  // Warm ivory
          'gold': '#C5A46E',      // Warm gold accent
          'gold-dark': '#A68A5A', // Darker gold for hover
          'brown': '#3D3630',     // Warm brown text
          'taupe': '#8B8178',     // Muted taupe
          'cream': '#F5F2ED',     // Soft cream
          'charcoal': '#1A1816',  // Charcoal for cards
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
