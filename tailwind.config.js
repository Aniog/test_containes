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
          800: '#1a1f2e',
          900: '#0f1318',
        },
        steel: {
          400: '#6b7280',
          500: '#3d4f5f',
          600: '#2d3a47',
        },
        gold: {
          400: '#d4b978',
          500: '#c9a961',
          600: '#b8944d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
