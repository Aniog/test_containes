/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-pizza': '#C0392B',
        'red-pizza-dark': '#922B21',
        'amber-pizza': '#E67E22',
        'cream': '#FDF6EC',
        'warm-white': '#FFFBF5',
        'charcoal': '#1C1C1C',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
