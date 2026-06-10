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
          DEFAULT: "#0f1722",
          soft: "#1c2a3a",
        },
        brass: {
          DEFAULT: "#c9a96a",
          light: "#e2c896",
          deep: "#a7894a",
        },
        bone: "#f6f2ea",
        paper: "#ffffff",
        hairline: "#e2dccd",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
      },
      maxWidth: {
        content: "1280px",
        readable: "65ch",
      },
    },
  },
  plugins: [],
}
