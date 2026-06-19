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
          DEFAULT: "#1A1612",
          soft: "#2A241D",
        },
        cream: {
          DEFAULT: "#F5F0E6",
          warm: "#EFE7D6",
        },
        ivory: "#FAF7F0",
        gold: {
          DEFAULT: "#B8965A",
          deep: "#8C6F3F",
          soft: "#D9C49A",
        },
        mushroom: {
          DEFAULT: "#8A7E70",
          dark: "#5C5246",
        },
        line: {
          DEFAULT: "#E2D9C6",
          dark: "#3A3128",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.28em",
      },
      maxWidth: {
        page: "1440px",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(26,22,18,0.05)",
        card: "0 8px 40px rgba(26,22,18,0.06)",
        drawer: "-20px 0 60px rgba(26,22,18,0.18)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms cubic-bezier(0.22, 0.61, 0.36, 1) both",
        fadeIn: "fadeIn 500ms ease both",
        slideInRight: "slideInRight 400ms cubic-bezier(0.22, 0.61, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
