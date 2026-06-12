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
        sky: '#4DA6D9',
        gold: '#C9A84C',
        surface: '#F4F6F9',
        'surface-dark': '#1A2A3A',
        muted: '#6B7A8D',
        border: '#D1D9E0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
