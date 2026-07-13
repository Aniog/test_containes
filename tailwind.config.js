/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0D1B2A',
        'steel-blue': '#1B3A5C',
        'slate-mid': '#2E4A6B',
        'gold': '#C9A84C',
        'gold-light': '#E8C97A',
        'off-white': '#F5F0E8',
        'light-gray': '#D4D8E0',
        'mist': '#EEF1F5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
