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
          100: '#F9F5ED',
          200: '#F3ECD9',
          300: '#E8DCC2',
        },
        charcoal: {
          50: '#F4F3F1',
          100: '#E8E6E2',
          200: '#D1CDC6',
          300: '#B5AFA5',
          400: '#9A9287',
          500: '#7D756A',
          600: '#605A50',
          700: '#443F38',
          800: '#2C2924',
          900: '#1A1815',
          950: '#0F0E0C',
        },
        gold: {
          50: '#FBF7ED',
          100: '#F5ECD4',
          200: '#EBD9A8',
          300: '#DEC275',
          400: '#D4AF37',
          500: '#C5A028',
          600: '#A68420',
          700: '#85681C',
          800: '#6B531E',
          900: '#5A451E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
        'super-wide': '0.35em',
      },
    },
  },
  plugins: [],
}
