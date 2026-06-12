/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#101820',
        steel: '#2F5F7C',
        brass: '#C49A4A',
        ivory: '#F7F4ED',
        mist: '#E8EDF0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(16, 24, 32, 0.12)',
      },
    },
  },
  plugins: [],
}
