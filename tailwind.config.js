/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        cream: {
          50: "#FBF7F1",
          100: "#F5EFE5",
          200: "#EDE3D2",
          300: "#E1D2B8",
        },
        espresso: {
          DEFAULT: "#1F1812",
          900: "#15110D",
          800: "#1F1812",
          700: "#2A2118",
          600: "#3A2D21",
        },
        gold: {
          DEFAULT: "#B8956A",
          50: "#F7F0E4",
          100: "#EBDCC1",
          200: "#D8BC8E",
          300: "#C8A86A",
          400: "#B8956A",
          500: "#A4804E",
          600: "#86653C",
          700: "#5F4727",
        },
        taupe: {
          DEFAULT: "#9B8E7E",
          200: "#C8B9A6",
          300: "#A89B8C",
          400: "#9B8E7E",
          500: "#7A6E60",
        },
        ink: {
          DEFAULT: "#1F1812",
          muted: "#5C5043",
        },
      },
      letterSpacing: {
        widest2: "0.22em",
        widest3: "0.28em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31, 24, 18, 0.04), 0 4px 12px rgba(31, 24, 18, 0.06)",
        drawer: "-12px 0 40px rgba(31, 24, 18, 0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out both",
        fadeIn: "fadeIn 0.6s ease-out both",
        slideInRight: "slideInRight 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
