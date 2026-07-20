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
        champagne: '#F3EFE8',
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        gold: {
          50: '#FBF6EE',
          100: '#F5ECDA',
          200: '#EBD9B8',
          300: '#DEC08A',
          400: '#CEA15D',
          500: '#B08D57',
          600: '#967A48',
          700: '#7A633B',
          800: '#625032',
          900: '#4F412A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        wider: '0.12em',
        wide: '0.06em',
      },
      transitionTimingFunction: {
        'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(28, 25, 23, 0.06)',
        'lift': '0 10px 40px rgba(28, 25, 23, 0.10)',
      },
    },
  },
  plugins: [],
}
