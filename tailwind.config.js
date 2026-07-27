/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f2b46',
        gold: '#c8922b',
        'gold-hover': '#b07d1f',
        'accent-blue': '#1e5fbb',
      },
    },
  },
  plugins: [],
}
