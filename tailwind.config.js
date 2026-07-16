/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F3EC",
        ink: "#1C1A17",
        espresso: "#211E1A",
        gold: "#B08A4B",
        "gold-soft": "#C9A86A",
        stone: "#8A8276",
        line: "#E2D9CB",
        cream: "#FBF8F2",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.18em",
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(28,26,23,0.25)",
        card: "0 18px 50px -28px rgba(28,26,23,0.35)",
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
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "slide-in": "slide-in 0.35s ease-out both",
      },
    },
  },
  plugins: [],
}
