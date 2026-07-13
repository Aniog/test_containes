/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy':        '#0D1B2A',
        'brand-steel':       '#1C3A5E',
        'brand-accent':      '#C8922A',
        'brand-accent-light':'#E8B04A',
        'brand-white':       '#F8F9FA',
        'brand-light':       '#EEF1F5',
        'brand-mid':         '#8A9BB0',
        'brand-dark':        '#1A2535',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
