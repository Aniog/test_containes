/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0D1B2A',
        'brand-steel': '#1C3A5E',
        'brand-gold': '#C9A84C',
        'brand-gold-light': '#E8C96A',
        'brand-white': '#F8F9FA',
        'brand-gray': '#6B7280',
        'brand-light': '#EEF1F5',
        'brand-dark-text': '#1A2332',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
