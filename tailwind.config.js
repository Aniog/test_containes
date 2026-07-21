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
          DEFAULT: "#1B1613",
          soft: "#2A2320",
        },
        bone: "#F6F1E8",
        porcelain: "#EFE7D8",
        champagne: {
          DEFAULT: "#C9A96A",
          deep: "#A88448",
          soft: "#E4CFA1",
        },
        hairline: {
          DEFAULT: "#D9CFBE",
          dark: "#3A302A",
        },
        muted: "#6B605A",
        sand: "#E8DEC9",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.3em',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(27,22,19,0.15)',
        drawer: '-20px 0 60px -20px rgba(27,22,19,0.35)',
      },
    },
  },
  plugins: [],
}
