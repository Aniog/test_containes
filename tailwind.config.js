/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        cream: "#F7F3EC",
        sand: "#EDE6DA",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#8A6A3B",
          light: "#D9C3A0",
        },
        stone: {
          DEFAULT: "#6B6258",
          light: "#9A9089",
        },
        hairline: "#E2D9CB",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(26,23,20,0.25)',
        card: '0 6px 30px -12px rgba(26,23,20,0.18)',
      },
    },
  },
  plugins: [],
}
