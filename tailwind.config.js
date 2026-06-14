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
          navy: '#0A1628',
          charcoal: '#1C2526',
          bronze: '#A68B5B',
          gold: '#C5A46E',
          steel: '#3A4F6B',
          light: '#F8F7F4',
          offwhite: '#F5F4F0',
          slate: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
