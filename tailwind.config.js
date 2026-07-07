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
          DEFAULT: "#1a1612",
          soft: "#2a241e",
          900: "#0f0d0a",
        },
        ivory: {
          DEFAULT: "#faf6f0",
          warm: "#f4ecdf",
        },
        cream: {
          DEFAULT: "#f1e9dd",
          deep: "#e7dcc8",
        },
        gold: {
          DEFAULT: "#b08856",
          light: "#c9a474",
          deep: "#8a6a3f",
        },
        rose: {
          DEFAULT: "#c8a48a",
          deep: "#a87f63",
        },
        muted: "#6f655a",
        hairline: "#e5dccd",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        wrap: "1440px",
      },
      boxShadow: {
        soft: "0 2px 30px rgba(26, 22, 18, 0.06)",
        lift: "0 18px 50px -20px rgba(26, 22, 18, 0.18)",
        chip: "0 1px 2px rgba(26, 22, 18, 0.05)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        fadeUp: "fadeUp 700ms ease-out both",
        drawLine: "drawLine 800ms ease-out both",
      },
    },
  },
  plugins: [],
}
