/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1714",
          soft: "#2A2520",
        },
        cream: {
          DEFAULT: "#F7F3EC",
          deep: "#EFE8DC",
        },
        sand: "#E4D9C7",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#9A7642",
          soft: "#C9A876",
        },
        stone: {
          DEFAULT: "#6B6258",
          light: "#8A8178",
        },
        line: "#D9CFC0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
    },
  },
  plugins: [],
}
