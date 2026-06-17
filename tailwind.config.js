/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-navy': '#1a2744',
        'steel-blue': '#3b5998',
        'warm-gray': '#f5f5f5',
        'charcoal': '#2d2d2d',
        'safety-orange': '#e87722',
        'machine-silver': '#c0c0c0',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
