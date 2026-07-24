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
          'bg': '#F8F5F1',        // Warm cream background
          'surface': '#F1EDE6',   // Slightly deeper cream
          'dark': '#1C1917',      // Deep warm charcoal
          'text': '#2C2825',      // Warm dark text
          'text-light': '#6B645C', // Muted text
          'gold': '#B89778',      // Warm gold accent
          'gold-dark': '#8C6F4E', // Deeper gold
          'gold-light': '#D4B896', // Lighter gold
          'border': '#D4CFC6',    // Hairline border
          'accent': '#A67C52',    // Rich accent gold
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
