/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#F9F7F4',
          sand: '#E8E2DA',
          taupe: '#A69F94',
          charcoal: '#2C2A26',
          gold: '#C9A962',
          goldLight: '#D4BC7D',
          goldDark: '#A88B47',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(44, 42, 38, 0.08)',
        'soft-hover': '0 8px 30px rgba(44, 42, 38, 0.12)',
      }
    },
  },
  plugins: [],
}
