/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy':       '#0D1B2A',
        'brand-steel':      '#1C3A5E',
        'brand-gold':       '#C9A84C',
        'brand-gold-light': '#E8C96A',
        'brand-silver':     '#8A9BB0',
        'brand-light':      '#F4F6F9',
        'brand-white':      '#FFFFFF',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
