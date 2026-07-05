import tailwindcssAnimate from "tailwindcss-animate"

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
          DEFAULT: "#1A1410",
          soft: "#241A14",
        },
        cream: {
          DEFAULT: "#F5EFE6",
          elevated: "#FAF6F0",
        },
        gold: {
          DEFAULT: "#B8954A",
          deep: "#8E6E33",
          soft: "#B8954A33",
        },
        "text-on-dark": "#F4ECE1",
        "muted-dark": "#B8A990",
        "text-on-light": "#2A2018",
        "muted-light": "#6E5D4E",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.18em",
        "widest-2": "0.25em",
        "widest-3": "0.3em",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(26, 20, 16, 0.18)",
        "soft-lg": "0 30px 60px -20px rgba(26, 20, 16, 0.25)",
        gold: "0 8px 24px -8px rgba(184, 149, 74, 0.45)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
