/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        ivory: "#F5F0E8",
        sand: "#E8E2D8",
        charcoal: "#1C1C1C",
        espresso: "#3D2E1E",
        gold: {
          DEFAULT: "#C4975C",
          dark: "#A87D48",
          light: "#D4AF6E",
          muted: "#B89860",
        },
        warm: {
          gray: "#8B7E6E",
          50: "#FAF8F5",
          100: "#F0EBE2",
          200: "#E0D8CA",
          300: "#CFC3B0",
          400: "#B5A78E",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.25em",
        "mega-wide": "0.35em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}
