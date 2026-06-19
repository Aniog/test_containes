/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora — Quiet Luxury palette
        ink: {
          DEFAULT: "#1B1714",   // deep espresso — primary text
          soft:    "#3A322C",
          muted:   "#7A6F66",
        },
        cream: {
          DEFAULT: "#F6F1EA",   // warm canvas
          50:      "#FBF8F4",
          100:     "#F6F1EA",
          200:     "#ECE3D7",
          300:     "#DCCFB8",
        },
        sand: {
          DEFAULT: "#E8DCC9",
          dark:    "#C9B690",
        },
        gold: {
          DEFAULT: "#B68A4E",   // antique gold accent
          dark:    "#8E6932",
          soft:    "#D9B27A",
          mist:    "#EBDAB8",
        },
        rust: {
          DEFAULT: "#7A3E2D",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(27,23,20,0.04), 0 8px 24px rgba(27,23,20,0.06)",
        lift: "0 1px 2px rgba(27,23,20,0.06), 0 16px 40px rgba(27,23,20,0.10)",
      },
      maxWidth: {
        page: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up": "fadeUp .8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn .8s ease-out both",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
