/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0D10',
        surface: '#14171C',
        accent: '#C8A264',
        'accent-hover': '#D4B87A',
        'text-primary': '#F0EDE8',
        'text-secondary': '#A9ADB5',
        'text-muted': '#6B7079',
        border: '#242830',
        'border-hover': '#3A3F4A',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.08em',
        'wide-btn': '0.06em',
      },
    },
  },
  plugins: [],
}
