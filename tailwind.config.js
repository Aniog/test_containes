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
          'bg': '#F9F6F1',
          'bg-alt': '#F4F0E9',
          'dark': '#1A1714',
          'text': '#2C2824',
          'muted': '#6B635C',
          'gold': '#B89778',
          'gold-dark': '#8B6F4E',
          'gold-light': '#D4B896',
          'cream': '#F8F5F1',
          'border': '#D9D2C7',
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
