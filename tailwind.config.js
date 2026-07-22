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
          DEFAULT: "#1C1714",
          soft: "#2A2320",
        },
        ivory: "#F7F3EC",
        cream: "#EFE7DA",
        sand: "#E2D6C3",
        stone: "#7A6F62",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#8A6A3B",
          light: "#D9BE8E",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.18em",
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(28,23,20,0.25)",
        card: "0 18px 50px -28px rgba(28,23,20,0.35)",
      },
      maxWidth: {
        content: "80rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "slide-in": "slideIn 0.35s ease-out both",
        "fade-in": "fadeIn 0.3s ease-out both",
      },
    },
  },
  plugins: [],
}
