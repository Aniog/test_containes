/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#D4B87A',
        'velmora-dark': '#1C1917',
        'velmora-cream': '#F5F0EB',
        'velmora-light': '#FAFAF9',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
