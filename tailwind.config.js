/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F6F0E4",
          soft: "#FBF7EE",
          warm: "#EFE6D2",
        },
        ink: {
          DEFAULT: "#1B1611",
          soft: "#6E6356",
          deep: "#15110D",
        },
        line: "#D9CFBE",
        gold: {
          DEFAULT: "#B48A4A",
          soft: "#D9B677",
          deep: "#8C6A36",
        },
        ivory: "#F6F0E4",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.28em",
        caps: "0.22em",
        product: "0.18em",
      },
      maxWidth: {
        editorial: "1320px",
      },
      boxShadow: {
        soft: "0 24px 60px -30px rgba(27,22,17,0.35)",
        chip: "0 10px 30px -18px rgba(27,22,17,0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        slideInRight: "slideInRight 0.45s cubic-bezier(0.22,1,0.36,1) forwards",
        sheen: "sheen 1.4s ease-in-out",
      },
    },
  },
  plugins: [],
}
