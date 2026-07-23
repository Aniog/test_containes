/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#13110f",
        "ink-soft": "#1c1815",
        "ink-deep": "#0a0908",
        bone: "#f4ede2",
        "bone-soft": "#ebe1d2",
        "bone-warm": "#f7f2e8",
        gold: "#c9a875",
        "gold-soft": "#e0c79a",
        "gold-deep": "#8a6f44",
        umber: "#2a1f17",
        taupe: "#8a7d6c",
        pearl: "#f7f2e8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest2: "0.22em",
        widest3: "0.32em",
      },
      maxWidth: {
        editorial: "1400px",
      },
      boxShadow: {
        soft: "0 20px 40px -20px rgba(0,0,0,0.35)",
        "soft-lg": "0 30px 60px -30px rgba(0,0,0,0.45)",
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
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
}
