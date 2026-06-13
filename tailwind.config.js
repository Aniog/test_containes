/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy':   '#0D1B2A',
        'brand-steel':  '#1C3A5E',
        'brand-blue':   '#2563EB',
        'brand-sky':    '#38BDF8',
        'brand-silver': '#CBD5E1',
        'brand-light':  '#F1F5F9',
        'brand-white':  '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
