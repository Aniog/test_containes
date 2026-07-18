/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F1E8",
        surface: "#FBF7F0",
        ink: {
          DEFAULT: "#1B1611",
          soft: "#3A302A",
        },
        espresso: "#1B1611",
        taupe: "#7A6B5A",
        dune: "#E0D5C0",
        gold: {
          DEFAULT: "#A8804B",
          deep: "#8A6938",
          soft: "#C9A77A",
        },
        petal: "#EAD9C2",
        clay: "#C8A687",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(27, 22, 17, 0.18)",
        card: "0 20px 60px -30px rgba(27, 22, 17, 0.25)",
        drawer: "-20px 0 60px -20px rgba(27, 22, 17, 0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
}
