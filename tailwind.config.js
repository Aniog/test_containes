/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F0E1",
          50:  "#FBF7EE",
          100: "#F7F0E1",
          200: "#F0E6D0",
          300: "#E8DCC4",
        },
        espresso: {
          DEFAULT: "#1A1208",
          50:  "#3C2E1F",
          100: "#2A1F12",
          200: "#1F1610",
          300: "#1A1208",
          400: "#120C04",
        },
        gold: {
          DEFAULT: "#A8804A",
          50:  "#F1E6D2",
          100: "#E8D4AC",
          200: "#D9C19A",
          300: "#C8A77A",
          400: "#B8935A",
          500: "#A8804A",
          600: "#8A6638",
          700: "#6B4F2C",
        },
        taupe: {
          DEFAULT: "#E8DCC4",
          100: "#F0E6D0",
          200: "#E8DCC4",
          300: "#D4C4A6",
          400: "#B8A688",
        },
        mocha: {
          DEFAULT: "#6B5A48",
          200: "#A89880",
          300: "#8A7762",
          400: "#6B5A48",
          500: "#534434",
        },
        sand: "#FBF7EE",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.12em",
        "wider-3": "0.14em",
        "wider-4": "0.16em",
        "wider-5": "0.22em",
      },
      maxWidth: {
        editorial: "1320px",
      },
      boxShadow: {
        card:     "0 1px 2px rgba(26,18,8,0.04), 0 8px 24px rgba(26,18,8,0.06)",
        elevated: "0 24px 64px rgba(26,18,8,0.18)",
        hover:    "0 12px 32px rgba(26,18,8,0.10)",
        nav:      "0 1px 0 rgba(26,18,8,0.06)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-in":   { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        "fade-up":   { "0%": { opacity: 0, transform: "translateY(8px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        "fade-down": { "0%": { opacity: 0, transform: "translateY(-8px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        "scale-in":  { "0%": { opacity: 0, transform: "scale(0.96)" }, "100%": { opacity: 1, transform: "scale(1)" } },
        "slide-in-right": { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0)" } },
        "shimmer":   { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        "fade-in":   "fade-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up":   "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-down": "fade-down 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "scale-in":  "scale-in 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-in-right": "slide-in-right 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
