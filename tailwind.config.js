/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#2A4E7C',
          700: '#1E3A5F',
          800: '#1B2E45',
          900: '#0D1B2A',
        },
        steel: {
          100: '#EBF5FB',
          200: '#D6EAF8',
          500: '#3498DB',
          600: '#2980B9',
          700: '#1F618D',
        },
        brand: {
          red: '#C0392B',
          'red-hover': '#E74C3C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px 0 rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
