/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#211A15",
        cocoa: "#3A2E24",
        cream: "#FAF6EF",
        sand: "#F1EADD",
        ivory: "#FFFDF9",
        gold: "#B98A2F",
        "gold-deep": "#96701F",
        bronze: "#8A6A3B",
        line: "#E6DCCB",
        "line-dark": "#4A3B2D",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Manrope"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
        mega: "0.32em",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(33,26,21,0.35)",
        card: "0 10px 30px -18px rgba(33,26,21,0.25)",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
}
