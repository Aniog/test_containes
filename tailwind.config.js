/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1116",
        graphite: "#1F242C",
        steel: "#3A4250",
        silver: "#A7B0BD",
        mist: "#E6E9EE",
        bone: "#F6F7F9",
        paper: "#FFFFFF",
        ember: {
          DEFAULT: "#C8842A",
          soft: "#E9C99A",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
