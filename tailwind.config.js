/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F1E6",
        paper: "#FBF7F0",
        ink: {
          DEFAULT: "#1A130E",
          soft: "#2A2018",
        },
        taupe: "#7A6B58",
        hairline: "#E4D9C4",
        gold: {
          DEFAULT: "#A8814C",
          deep: "#8A6A3A",
          soft: "#D9C39A",
        },
        cocoa: "#3A2A1C",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "ui": "0.18em",
        "ui-wide": "0.24em",
      },
      maxWidth: {
        "8xl": "88rem",
        "prose-luxe": "44rem",
      },
      boxShadow: {
        "soft": "0 1px 2px rgba(26,19,14,0.04), 0 8px 24px rgba(26,19,14,0.06)",
        "soft-lg": "0 1px 2px rgba(26,19,14,0.05), 0 18px 40px rgba(26,19,14,0.08)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-soft": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "fade-in-soft": "fade-in-soft 0.6s ease-out both",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
