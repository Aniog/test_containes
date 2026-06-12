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
        steel: '#1C3A5E',
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        silver: '#8FA3B1',
        offwhite: '#F4F6F8',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
