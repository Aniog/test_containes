/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wc-bg': '#0a0e1a',
        'wc-surface': '#111827',
        'wc-card': '#1a2235',
        'wc-border': '#2a3550',
        'wc-gold': '#f5c518',
        'wc-red': '#e63946',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
