/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1116",
        graphite: "#1F242C",
        steel: "#5B6472",
        mist: "#E6E8EC",
        bone: "#F5F3EE",
        paper: "#FFFFFF",
        brass: {
          DEFAULT: "#B8884A",
          dark: "#8E6632",
          soft: "#EDE3D2",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
