/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FFFCF7",
          100: "#FAF6EE",
          200: "#F2EADC",
          300: "#E5D8BF",
          400: "#D6C39E",
        },
        ink: {
          50: "#F1ECE5",
          100: "#C9BEB1",
          200: "#8A7A6A",
          300: "#5A4A3B",
          400: "#3A2D22",
          500: "#2B201A",
          600: "#1F1812",
          700: "#15100B",
        },
        gold: {
          50: "#FBF4E5",
          100: "#F0E1BD",
          200: "#DEC388",
          300: "#C7A35A",
          400: "#B68A4E",
          500: "#A07A3D",
          600: "#80612E",
        },
        taupe: {
          200: "#E0D6C5",
          300: "#C7B89E",
          400: "#A89585",
          500: "#7A6B5A",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.24em",
      },
      maxWidth: {
        prose: "65ch",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(43, 32, 26, 0.18)",
        card: "0 18px 60px -30px rgba(43, 32, 26, 0.35)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "slide-in-right": "slideInRight 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        "slide-in-up": "slideInUp 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
