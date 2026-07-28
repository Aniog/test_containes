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
        'brand-blue': '#1E5EFF',
        'brand-sky': '#EAF2FF',
        'brand-amber': '#F5B23E',
        'brand-slate': '#475569',
        'brand-line': '#DDE6F2',
      },
    },
  },
  plugins: [],
}
