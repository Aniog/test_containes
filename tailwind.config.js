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
        'brand-white':     '#FFFFFF',
        'brand-offwhite':  '#F5F5F0',
        'brand-gray':      '#8A9BB0',
        'brand-light':     '#E8EDF3',
        'brand-dark':      '#060E18',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
