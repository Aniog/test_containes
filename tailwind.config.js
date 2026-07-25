/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#191410",
        "noir-soft": "#241D17",
        ivory: "#FAF6F0",
        cream: "#F3EDE2",
        sand: "#E7DECF",
        gold: "#B08D57",
        "gold-deep": "#8F6E3E",
        "gold-light": "#D6BE96",
        hairline: "#E4DCCF",
        "hairline-dark": "#3A322A",
        muted: "#7D7264",
        "muted-dark": "#A79B8B",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(25, 20, 16, 0.25)",
        drawer: "-30px 0 60px -30px rgba(25, 20, 16, 0.35)",
      },
    },
  },
  plugins: [],
}
