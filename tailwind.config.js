/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        cream: "#F4ECE0",
        ivory: "#FAF5EB",
        gold: {
          DEFAULT: "#B08856",
          deep: "#8C6A3E",
          soft: "#D9B98A",
        },
        tan: "#D9C9B0",
        stone: "#8B8275",
        mauve: "#6B5A4D",
        claret: "#5A1F23",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        product: "0.18em",
        nav: "0.2em",
        logo: "0.32em",
      },
      maxWidth: {
        editorial: "1280px",
        prose: "65ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,23,20,0.04), 0 8px 24px rgba(26,23,20,0.06)",
        card: "0 1px 1px rgba(26,23,20,0.03), 0 4px 16px rgba(26,23,20,0.05)",
        drawer: "-20px 0 40px rgba(26,23,20,0.12)",
      },
      transitionTimingFunction: {
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "drawer-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "drawer-in": "drawer-in 0.35s cubic-bezier(0.32, 0.72, 0, 1) both",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
}
