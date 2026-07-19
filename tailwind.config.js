/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FAF8F5',
        'charcoal': '#2C2C2C',
        'gold': '#C9A96E',
        'gold-light': '#D4B896',
        'gold-dark': '#A67C52',
        'warm-gray': '#8A8580',
        'light-gray': '#F5F3F0',
        'border': '#E8E4DF',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
      },
    },
  },
  plugins: [],
}
