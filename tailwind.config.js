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
          cream: '#FAF8F5',
          sand: '#F5F0E8',
          taupe: '#C4B8A8',
          charcoal: '#2C2A26',
          gold: '#C9A962',
          goldLight: '#E5D4A1',
          goldDark: '#9A7B3D',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(44, 42, 38, 0.08)',
        'soft-lg': '0 8px 40px rgba(44, 42, 38, 0.12)',
      }
    },
  },
  plugins: [],
}
