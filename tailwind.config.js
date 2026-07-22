/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d7b0',
          300: '#e8ba7e',
          400: '#d99a4e',
          500: '#c2823a',
          600: '#a66b2e',
          700: '#8a5626',
          800: '#704621',
          900: '#5c3a1e',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}
