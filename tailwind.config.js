/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6ED',
          200: '#F5EBD9',
          300: '#EBDCC4',
        },
        espresso: {
          800: '#2C1810',
          900: '#1A0F0A',
        },
        gold: {
          DEFAULT: '#C9A962',
          light: '#D4BC7E',
          dark: '#B8944D',
        },
        champagne: '#E8DCC8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
