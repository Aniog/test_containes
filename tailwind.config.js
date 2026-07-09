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
          50: '#FAF8F5',
          100: '#F5F2EC',
          200: '#EDE8E0',
          300: '#E3DDD5',
          400: '#CBC1B5',
          500: '#B3A696',
          600: '#8B7355',
          700: '#6B6560',
          800: '#4A4540',
          900: '#2A2825',
        },
        gold: {
          DEFAULT: '#B8860B',
          50: '#FFF8E7',
          100: '#FEF0C8',
          200: '#FDE18A',
          300: '#FCD24D',
          400: '#D4A817',
          500: '#B8860B',
          600: '#936A08',
          700: '#6E4F06',
          800: '#4A3504',
          900: '#251A02',
        },
        bronze: {
          DEFAULT: '#8B7355',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.16em',
      },
    },
  },
  plugins: [],
}
