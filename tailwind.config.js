/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF6EF",
          soft: "#F2EBDE",
          deep: "#EFE6D2",
        },
        espresso: {
          DEFAULT: "#1B1612",
          soft: "#2A221B",
          mid: "#3A3027",
        },
        gold: {
          DEFAULT: "#B8935A",
          soft: "#D6B681",
          deep: "#8A6A3B",
        },
        ink: {
          DEFAULT: "#1B1612",
          muted: "#6E6256",
          subtle: "#9A8E80",
        },
        hairline: {
          DEFAULT: "#E5DCC9",
          dark: "#3A3027",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.18em",
        "wider-3": "0.22em",
        "widest-2": "0.28em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 600ms ease-out forwards",
        "fade-up": "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "marquee-scroll": "marquee-scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
}
