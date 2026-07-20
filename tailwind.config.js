/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#1C1917',
        'warm-white': '#FAF9F6',
        'gold': '#C9A96E',
        'gold-dark': '#A88B4A',
        'cream': '#F5F0E8',
        'stone': '#8C8279',
        'sand': '#E8E2DA',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
