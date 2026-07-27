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
          navy: '#1B4F8A',
          blue: '#2563EB',
          red: '#C0392B',
          dark: '#1A2332',
          mid: '#4B5563',
          light: '#F8FAFC',
          border: '#E2E8F0',
          green: '#16A34A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
