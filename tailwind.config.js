/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#FBF9F6",
        charcoal: "#1A1A1A",
        velmora: {
          gold: "#C5A059",
          nude: "#EADEDA",
          divider: "#E5E5E5",
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'velmora': '0.15em',
      }
    },
  },
  plugins: [],
}
