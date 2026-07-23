/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1C1714",
        ink: "#2A2520",
        cream: "#F7F3EC",
        sand: "#EDE6DA",
        gold: "#B08A4F",
        "gold-soft": "#C9A86A",
        stone: "#8A7F73",
        hairline: "#D9CFC0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
      },
      maxWidth: {
        content: "80rem",
      },
      boxShadow: {
        soft: "0 12px 40px -12px rgba(28, 23, 20, 0.18)",
        card: "0 8px 30px -14px rgba(28, 23, 20, 0.15)",
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
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-in": "slide-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
}
