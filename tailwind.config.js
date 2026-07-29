/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sourcing-navy': '#0E2A47',
        'sourcing-blue': '#1F6FAD',
        'sourcing-gold': '#C7902E',
        'sourcing-cloud': '#F5F8FB',
        'sourcing-mist': '#E7EEF5',
        'sourcing-ink': '#1D2939',
        'sourcing-muted': '#536275',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(14, 42, 71, 0.10)',
      },
    },
  },
  plugins: [],
}
