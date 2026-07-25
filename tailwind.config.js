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
          'base': '#1A1816',
          'cream': '#F5F2ED',
          'gold': '#C5A26F',
          'taupe': '#8B7E6F',
          'white': '#FFFFFF',
          'light-gold': '#E8D9C2',
          'dark-gold': '#A67C52',
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
