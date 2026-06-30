/** @type {import('tailwindcss').Config} */
/* v2 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#1a1714',
          light: '#2a2520',
        },
        ivory: {
          DEFAULT: '#faf7f2',
          muted: '#f0ebe4',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#d4b87a',
          dark: '#a8894e',
        },
        'warm-gray': '#8a7e72',
        'warm-border': {
          DEFAULT: '#3d3530',
          light: '#e8e2da',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
      },
    },
  },
  plugins: [],
}
