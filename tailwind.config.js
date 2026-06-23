/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A5F',
        'primary-light': '#2D5A8A',
        secondary: '#F97316',
        'secondary-hover': '#EA580C',
      },
      maxWidth: {
        '1200px': '1200px',
      },
    },
  },
  plugins: [],
}
