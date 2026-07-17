/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy':      '#0D1B2A',
        'brand-steel':     '#1C3A5E',
        'brand-gold':      '#C9A84C',
        'brand-gold-light':'#E8C97A',
        'brand-silver':    '#8FA3B1',
        'brand-light':     '#F4F6F8',
        'brand-white':     '#FFFFFF',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
