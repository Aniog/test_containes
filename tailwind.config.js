/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        'sans-custom': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'velmora': {
          'base': '#0D0C0A',
          'cream': '#F7F3EB',
          'stone': '#E5DFD3',
          'gold': '#C5A46E',
          'gold-dark': '#A88A55',
          'text': '#1C1B19',
          'muted': '#6B6259',
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
