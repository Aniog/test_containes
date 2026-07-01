/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quiet luxury palette: warm ivory base, deep espresso, warm gold accent
        ivory: {
          50: "#FBF7F1",
          100: "#F5EFE5",
          200: "#EFE6D5",
          300: "#E5D8BF",
        },
        espresso: {
          50: "#5A4A3C",
          100: "#3F322A",
          200: "#2D241E",
          300: "#1F1813",
          400: "#15100C",
        },
        gold: {
          50: "#FBF1DC",
          100: "#F1DFAE",
          200: "#E2C07A",
          300: "#C99A4A",
          400: "#A8802E",
          500: "#876320",
        },
        muted: {
          DEFAULT: "#7A6A58",
          light: "#A89880",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.28em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(31, 24, 19, 0.18)",
        "soft-lg": "0 24px 60px -20px rgba(31, 24, 19, 0.25)",
        ring: "0 0 0 1px rgba(168, 128, 46, 0.35)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        slideInRight: "slideInRight 0.45s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
}
