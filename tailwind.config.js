/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A3A5C',
        'navy-dark': '#122840',
        'navy-light': '#2A5080',
        'brand-red': '#C0392B',
        'brand-red-dark': '#a93226',
        'brand-gold': '#D4A017',
        'site-bg': '#F7F8FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
