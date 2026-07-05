/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5EFE6",
        ink: "#1B1714",
        gold: "#B8893E",
        rosegold: "#C9A57B",
        taupe: "#7A6F62",
        surface: "#FBF7F1",
        mocha: "#241D17",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        product: "0.18em",
        eyebrow: "0.25em",
        button: "0.2em",
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(27, 23, 20, 0.25)",
        card: "0 20px 50px -28px rgba(27, 23, 20, 0.35)",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
