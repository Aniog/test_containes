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
          navy: '#0A2463',
          blue: '#1565C0',
          sky: '#1E88E5',
          teal: '#00897B',
          light: '#F5F7FA',
          border: '#E8ECF0',
          text: '#64748B',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
