/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0f1115',
        slate: '#1a1d24',
        bronze: '#b8860b',
        gold: '#d4af37',
        'light-gold': '#e8c84a',
        'off-white': '#e8e4dc',
        'muted-gray': '#8a8f99',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
