/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf8f5',
          100: '#f3efe7',
          200: '#e6ddd0',
          300: '#d5c7b1',
          400: '#c2ab8d',
          500: '#b39471',
          600: '#a07c59',
          700: '#85654b',
          800: '#6d5341',
          900: '#5a4537',
          950: '#30241c',
        },
        cream: {
          50: '#fdfaf5',
          100: '#f9f2e3',
          200: '#f2e3c6',
          300: '#e9cf9e',
          400: '#deb874',
          500: '#d4a355',
          600: '#c28c45',
          700: '#a1713a',
          800: '#835c34',
          900: '#6b4c2d',
          950: '#392816',
        },
        velmora: {
          DEFAULT: '#30241c',
          light: '#5a4537',
          muted: '#8b7355',
          gold: '#c2ab8d',
          cream: '#faf8f5',
          sand: '#f3efe7',
          rose: '#e8ddd0',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.12em',
        wide: '0.06em',
      },
    },
  },
  plugins: [],
}
