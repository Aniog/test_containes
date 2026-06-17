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
        steel: "#5A6573",
        mist: "#E6E8EC",
        bone: "#F6F5F1",
        paper: "#FFFFFF",
        brass: {
          DEFAULT: "#B68A4E",
          dark: "#8E6A38",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.3em',
      },
    },
  },
  plugins: [],
}
