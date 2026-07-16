/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C5A059",
        charcoal: "#1A1A1A",
        offwhite: "#FBFBF9",
        beige: "#EAE7E1",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        "widest-tl": "0.3em",
      },
    },
  },
  plugins: [],
}
