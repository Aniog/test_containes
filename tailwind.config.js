/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: '#0B4F6C',
        'ocean-light': '#1A7FA8',
        sand: '#F5E6C8',
        'sand-dark': '#D4B896',
        coral: '#E8603C',
        'coral-dark': '#C44A2A',
        jungle: '#2D6A4F',
        stone: '#3D3530',
        mist: '#F8F4EE',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
