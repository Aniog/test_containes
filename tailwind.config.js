/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        steel: '#1E6FA5',
        sky: '#4DA8DA',
        gold: '#C9A84C',
        surface: '#F4F6F9',
        surfaceMid: '#E8ECF2',
        bodyText: '#3A4A5C',
        mutedText: '#6B7A8D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
