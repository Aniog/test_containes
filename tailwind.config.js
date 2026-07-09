/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: "#241B17",
          cocoa: "#3B2E28",
          ivory: "#F4EFE8",
          cream: "#FBF7F1",
          bronze: "#BE9B6F",
          gold: "#D8BC8F",
          sand: "#D7C9B7",
          mist: "#F8F3EC",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        velmora: "0 20px 50px rgba(36, 27, 23, 0.08)",
        lifted: "0 30px 70px rgba(36, 27, 23, 0.14)",
      },
      backgroundImage: {
        vignette:
          "linear-gradient(180deg, rgba(36,27,23,0.06) 0%, rgba(36,27,23,0.72) 100%)",
      },
    },
  },
  plugins: [],
}
