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
          'deep': '#1a1a1a',
          'gold': '#c9a96e',
          'gold-light': '#e8d5b7',
          'cream': '#faf8f5',
          'charcoal': '#4a4a4a',
          'soft-gray': '#f5f5f5'
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        'wide': '0.15em',
        'wider': '0.2em'
      }
    },
  },
  plugins: [],
}
