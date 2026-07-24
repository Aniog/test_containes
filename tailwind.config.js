/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          base: '#fafaf9',
          dark: '#0c0a09',
          muted: '#78716c',
          hairline: '#e7e5e4',
          accent: '#b45309',
          accentHover: '#92400e',
        }
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
