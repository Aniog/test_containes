/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          hover: '#0D3D68',
          light: '#E8F0F8',
        },
        secondary: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
        },
        accent: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
