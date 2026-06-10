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
        steel: "#5A6472",
        mist: "#E5E7EB",
        bone: "#F5F2EC",
        paper: "#FFFFFF",
        accent: {
          DEFAULT: "#B8893E",
          dark: "#8C6628",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
}
