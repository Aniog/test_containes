/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial warm neutral palette
        bone: "#F5F0E8",
        ivory: "#FAF6EF",
        sand: "#EFE7D8",
        line: "#E5DDD0",
        ink: "#1F1A17",
        charcoal: "#3A332E",
        mute: "#7A6F66",
        // Warm metallic accents
        gold: {
          DEFAULT: "#B08949",
          dark: "#8A6A35",
          light: "#D4B27C",
          soft: "#E7D2A6",
        },
        // Restrained secondary accent
        clay: "#8B4F3A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
        widest3: "0.32em",
      },
      boxShadow: {
        soft: "0 6px 24px -10px rgba(31, 26, 23, 0.18)",
        card: "0 18px 60px -30px rgba(31, 26, 23, 0.30)",
        ring: "0 0 0 1px #E5DDD0",
      },
      maxWidth: {
        editorial: "1440px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
        slideIn: "slideIn 400ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
        marquee: "marquee 40s linear infinite",
        drawLine: "drawLine 1200ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
}
