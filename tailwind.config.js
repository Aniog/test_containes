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
          DEFAULT: '#0F1B33',
          light: '#1A2A4A',
        },
        brand: {
          DEFAULT: '#1E5BB5',
          dark: '#174a93',
          darker: '#123a73',
        },
        'light-blue': '#E8F0FE',
        'muted-blue': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
