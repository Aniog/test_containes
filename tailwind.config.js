/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6F0",
        cream: "#F1E9DC",
        taupe: "#D9CFC1",
        mocha: "#8A6F4E",
        espresso: "#1F1A17",
        "espresso-soft": "#3A2E26",
        gold: "#B8965A",
        "gold-soft": "#D4B98A",
        "gold-deep": "#8E6F40",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.2em",
        "wider-3": "0.3em",
        "wider-4": "0.4em",
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 600ms cubic-bezier(0.22, 0.61, 0.36, 1) both",
        "slide-in-right": "slide-in-right 350ms cubic-bezier(0.22, 0.61, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
