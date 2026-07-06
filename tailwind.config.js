/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F6F1",
        espresso: "#1E1814",
        taupe: "#E8E0D6",
        gold: "#B98B4F",
        "warm-gray": "#7A6F66",
        linen: "#F3EDE4",
        hairline: "#D9CFC3",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out forwards",
        slideInRight: "slideInRight 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
