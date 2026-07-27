/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0B1F3A',
        'brand-blue': '#1D4ED8',
        'brand-cyan': '#0E7490',
        'brand-amber': '#F59E0B',
        'brand-slate': '#334155',
        'brand-mist': '#F1F5F9',
        'brand-ice': '#F8FAFC',
        'brand-line': '#D8E1EC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'b2b': '0 18px 45px rgba(11, 31, 58, 0.10)',
      },
    },
  },
  plugins: [],
}
