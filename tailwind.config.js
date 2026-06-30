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
          DEFAULT: "#F6F0E6",
          deep: "#EFE6D6",
        },
        sand: "#E2D5BF",
        taupe: "#D5C7B0",
        espresso: {
          DEFAULT: "#1B130C",
          soft: "#3B2D21",
        },
        mink: "#6B5B49",
        noir: {
          DEFAULT: "#1B130C",
          soft: "#2A1F18",
        },
        champagne: {
          DEFAULT: "#B69960",
          soft: "#D4B988",
          deep: "#8C7140",
        },
        bone: {
          DEFAULT: "#F1E8D8",
          soft: "#C7B89D",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        kicker: "0.3em",
        product: "0.18em",
        wider: "0.14em",
      },
      maxWidth: {
        page: "1280px",
        prose: "60ch",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(27, 19, 12, 0.18)",
        softer: "0 4px 18px -10px rgba(27, 19, 12, 0.12)",
        ring: "0 0 0 1px #D5C7B0",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        slideInRight: "slideInRight 320ms cubic-bezier(0.16, 1, 0.3, 1)",
        fadeUp: "fadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) both",
        pulseSoft: "pulseSoft 600ms ease-out",
      },
    },
  },
  plugins: [],
}
