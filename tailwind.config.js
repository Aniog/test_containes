/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#201a18',
        ivory: '#f6f0e8',
        sand: '#e8dfd4',
        bronze: '#c8a06a',
        rose: '#efe4dd',
        line: '#c7bbaf',
        muted: '#6f635b',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(32, 26, 24, 0.08)',
      },
    },
  },
  plugins: [],
}
