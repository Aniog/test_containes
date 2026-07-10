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
          DEFAULT: "#F7F1E8",
          soft: "#EFE7D9",
          glow: "#FBF7F0",
        },
        espresso: {
          DEFAULT: "#1A120C",
          soft: "#2A1F1A",
          deep: "#0E0805",
        },
        cocoa: "#3A2A1F",
        ink: "#2A1F1A",
        muted: "#8A7B6F",
        hairline: "#E5D8C7",
        champagne: {
          DEFAULT: "#B89466",
          soft: "#D9B888",
          deep: "#8C6E48",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        product: "0.18em",
        wide2: "0.14em",
      },
      maxWidth: {
        editorial: "1280px",
        prose: "62ch",
      },
      boxShadow: {
        soft: "0 1px 0 0 rgba(26, 18, 12, 0.04)",
        lift: "0 24px 60px -32px rgba(26, 18, 12, 0.25)",
        gold: "0 12px 32px -16px rgba(184, 148, 102, 0.45)",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.4s ease-out both",
        slideInRight: "slideInRight 0.45s cubic-bezier(0.32, 0.72, 0, 1) both",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
      transitionTimingFunction: {
        velvet: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
}
