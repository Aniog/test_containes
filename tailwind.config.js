/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1a1a2e',
          gold: '#c9a96e',
          bronze: '#8b7355',
          cream: '#f5f5f0',
          surface: '#ffffff',
          muted: '#6b6b7b',
          border: '#e0dcd4',
          success: '#2d6a4f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
