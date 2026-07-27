/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1e3a5f',
        'brand-blue': '#2563eb',
        'brand-orange': '#e97b2c',
        'brand-dark': '#1a1a2e',
        'brand-gray': '#64748b',
        'brand-light': '#f8fafc',
        'brand-white': '#ffffff',
        'brand-green': '#16a34a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
