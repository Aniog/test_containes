/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        'navy-light': '#1E293B',
        steel: '#2563EB',
        'steel-dark': '#1D4ED8',
        gold: '#D4A853',
        'gold-light': '#E8C97A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
