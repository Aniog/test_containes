/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peak: '#1a2e44',
        'slate-peak': '#2d4a6b',
        alpine: '#4a7c9e',
        glacier: '#a8c5da',
        snow: '#f4f8fb',
        summit: '#e8f0f7',
        pine: '#2d5a27',
        stone: '#6b7280',
        'amber-peak': '#d97706',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
