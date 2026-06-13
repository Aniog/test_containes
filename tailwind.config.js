/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f1a2e',
        'navy-light': '#162544',
        brand: {
          blue: '#1a56db',
          'blue-light': '#2563eb',
          'blue-dark': '#1e40af',
          orange: '#e35f21',
          'orange-hover': '#c75119',
        }
      }
    },
  },
  plugins: [],
}
