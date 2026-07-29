/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0f2742',
        'brand-blue': '#1e5b96',
        'brand-sky': '#e7f2fb',
        'brand-slate': '#516376',
        'brand-mist': '#f5f8fb',
        'brand-line': '#d9e3ed',
        'brand-green': '#1f8a5b',
        'brand-orange': '#c96a2b',
      },
      boxShadow: {
        'b2b-card': '0 18px 45px rgba(15, 39, 66, 0.08)',
      },
    },
  },
  plugins: [],
}
