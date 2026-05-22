/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza-red': '#C0392B',
        'deep-red': '#922B21',
        'warm-orange': '#E67E22',
        'cream': '#FDF6EC',
        'dark-brown': '#2C1A0E',
        'warm-gray': '#7D6B5E',
        'gold': '#D4A017',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
