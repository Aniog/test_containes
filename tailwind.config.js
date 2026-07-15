/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#1f1715',
        'velmora-panel': '#2b211f',
        'velmora-ivory': '#f6f0ea',
        'velmora-sand': '#e8ddd2',
        'velmora-gold': '#b68a52',
        'velmora-gold-deep': '#9d7443',
        'velmora-line': '#d8cabd',
        'velmora-mist': '#6d5c55',
        'velmora-cloud': '#d8c9bc',
      },
    },
  },
  plugins: [],
}
