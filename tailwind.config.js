/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: "#F6F1EA",
          2: "#EFE7DC",
          3: "#E8DFCE",
        },
        ink: {
          DEFAULT: "#1B1815",
          soft: "#2B2520",
        },
        muted: {
          DEFAULT: "#6B6259",
          2: "#8B8377",
        },
        gold: {
          DEFAULT: "#B08A52",
          deep: "#8C6B3D",
          soft: "#D4B98A",
        },
        terracotta: {
          DEFAULT: "#A35F3F",
          deep: "#8B4D31",
        },
        line: {
          DEFAULT: "#D9CFC0",
          strong: "#1B1815",
        },
        success: "#4F6B4A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Cormorant", "ui-serif", "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.02em",
        product: "0.18em",
        eyebrow: "0.25em",
        wider2: "0.35em",
      },
      maxWidth: {
        editorial: "78rem",
        prose2: "42rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(27,24,21,0.04), 0 4px 16px rgba(27,24,21,0.04)",
        lift: "0 8px 28px rgba(27,24,21,0.08)",
        drawer: "-12px 0 40px rgba(27,24,21,0.12)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-out both",
        slideInRight: "slideInRight 320ms ease-out both",
        slideDown: "slideDown 200ms ease-out both",
      },
    },
  },
  plugins: [],
}
