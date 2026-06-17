/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a1f2e',
          steel: '#2a3448',
          gold: '#c9a44b',
          'gold-light': '#e8d5a3',
          surface: '#f7f8fa',
          'text-secondary': '#5a6478',
          'text-muted': '#8b94a6',
          border: '#e2e6ed',
        },
      },
    },
  },
  plugins: [],
}
