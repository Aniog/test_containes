/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F5EFE6",
          50: "#FBF8F3",
          100: "#F8F2E9",
          200: "#F1E9D9",
          300: "#E8DCC4",
        },
        espresso: {
          DEFAULT: "#1A1612",
          50: "#3A332B",
          100: "#2E2820",
          200: "#26201A",
          300: "#1F1A14",
          400: "#1A1612",
          500: "#15110D",
        },
        taupe: {
          DEFAULT: "#8A7E6F",
          light: "#B3A797",
          dark: "#6B6053",
        },
        gold: {
          DEFAULT: "#C9A66B",
          light: "#DBC08C",
          dark: "#A8854A",
          glow: "#E8CFA1",
        },
        line: "#E2D7C4",
        "line-dark": "#2C2620",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.18em",
        ultra: "0.28em",
      },
      maxWidth: {
        content: "1280px",
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26, 22, 18, 0.04), 0 8px 24px rgba(26, 22, 18, 0.06)",
        lift: "0 4px 12px rgba(26, 22, 18, 0.08), 0 24px 48px rgba(26, 22, 18, 0.10)",
        ring: "0 0 0 1px rgba(26, 22, 18, 0.06)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.32, 0.72, 0, 1) both",
        shimmer: "shimmer 3s linear infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
}
