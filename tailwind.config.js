/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0f1b2d', light: '#2d4a6e' },
        gold: { DEFAULT: '#c9a227', light: '#e8c547', muted: '#a07c1e' },
        ivory: { DEFAULT: '#f5f0e8', light: '#faf8f4' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
