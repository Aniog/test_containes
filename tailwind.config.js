/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1c1917",
          soft: "#2a2522",
          muted: "#57534e",
        },
        cream: {
          DEFAULT: "#f7f3ee",
          50: "#fbf9f6",
          100: "#f7f3ee",
          200: "#efe7dc",
          300: "#e3d6c6",
        },
        gold: {
          DEFAULT: "#b08d57",
          light: "#c9a877",
          deep: "#8a6d3f",
          soft: "#d9c3a0",
        },
        sand: "#e9ddcc",
        wine: "#5b2a2a",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      maxWidth: {
        editorial: "1400px",
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(28, 25, 23, 0.25)",
        card: "0 4px 24px -12px rgba(28, 25, 23, 0.18)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.6s ease both",
      },
    },
  },
  plugins: [],
}
