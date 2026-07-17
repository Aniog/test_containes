/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1C1714",
          soft: "#3A322C",
        },
        cream: "#F7F2EA",
        sand: "#EDE3D3",
        stone: "#8A7E6E",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#8C6E3F",
        },
        champagne: "#D9C3A0",
        line: "#E2D8C8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      maxWidth: {
        content: "76rem",
      },
      boxShadow: {
        editorial: "0 18px 40px -24px rgba(28,23,20,0.35)",
        soft: "0 8px 30px -18px rgba(28,23,20,0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "slide-in": "slideIn 0.4s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
    },
  },
  plugins: [],
}
