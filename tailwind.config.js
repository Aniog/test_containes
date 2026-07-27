/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1B2B4B',
        'brand-blue': '#2563EB',
        'brand-orange': '#F97316',
        'brand-slate': '#334155',
        'brand-gray': '#F8FAFC',
        'brand-border': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
