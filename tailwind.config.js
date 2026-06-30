/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        warm: {
          50: '#FDFBF7',
          100: '#F5F0E8',
          200: '#EBE1D0',
          300: '#D4C4A8',
          400: '#C8A96E',
          500: '#B8945A',
          600: '#9E7B48',
          700: '#7D603A',
          800: '#5C4630',
          900: '#3D2E22',
        },
        midnight: '#1A1A1C',
        charcoal: '#2D2D30',
        stone: '#8A8780',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.08em',
        widest: '0.15em',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
