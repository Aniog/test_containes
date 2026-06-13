/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#1a1f2e',
        gold: '#c8a45c',
        'gold-light': '#e8d5a3',
        'warm-white': '#faf8f5',
        'text-secondary': '#5a5f6e',
        'border-subtle': '#e5e0d8',
      },
    },
  },
  plugins: [],
}
