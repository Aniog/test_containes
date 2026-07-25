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
          'base': '#1C1917',       // Deep warm charcoal
          'cream': '#F8F5F1',      // Warm cream
          'gold': '#C5A46E',       // Soft gold accent
          'gold-dark': '#8B7355',  // Deeper gold
          'text': '#4A4642',       // Muted text
          'text-light': '#7A7672', // Lighter text
          'light': '#EDE8E0',      // Light warm gray
          'white': '#FAF8F5',      // Warm white
        }
      },
      letterSpacing: {
        'widest': '0.15em',
        'wider': '0.1em',
      }
    },
  },
  plugins: [],
}
