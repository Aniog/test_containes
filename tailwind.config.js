/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          'charcoal': '#1C1917',
          'cream': '#FAF8F5',
          'gold': '#C9A962',
          'gold-dark': '#B8944E',
          'gold-light': '#D4BC7E',
          'warm-gray': '#78716C',
          'border': '#E8E4DF',
          'white': '#FFFFFF',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'extra-wide': '0.15em',
        'wider': '0.1em',
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(28, 25, 23, 0.06)',
        'lifted': '0 8px 30px rgba(28, 25, 23, 0.1)',
        'gold': '0 4px 14px rgba(201, 169, 98, 0.25)',
      },
    },
  },
  plugins: [],
}
