/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0B1426',
          medium: '#132042',
          light: '#1B2D5A',
        },
        gold: {
          DEFAULT: '#C8A45C',
          light: '#D4B876',
          dark: '#A88940',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
