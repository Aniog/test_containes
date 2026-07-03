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
          DEFAULT: "#F6F1E8",
          50: "#FBF8F2",
          100: "#F8F3EB",
          200: "#F6F1E8",
          300: "#EFE7D8",
        },
        espresso: {
          DEFAULT: "#1F1A14",
          50: "#5A5046",
          100: "#3F362D",
          200: "#2C241D",
          300: "#1F1A14",
          400: "#15110C",
        },
        champagne: {
          DEFAULT: "#B8956A",
          50: "#E7D6BA",
          100: "#D6BD96",
          200: "#C6A77A",
          300: "#B8956A",
          400: "#A07D52",
          500: "#8A6A45",
        },
        sand: {
          DEFAULT: "#E8DFD0",
          100: "#F1EADD",
          200: "#E8DFD0",
          300: "#D8CBB5",
        },
        stone: {
          DEFAULT: "#7A6E60",
          200: "#A89C8E",
          300: "#7A6E60",
          400: "#5A5046",
        },
        linen: "#FBF8F2",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.22em",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      boxShadow: {
        soft: "0 24px 60px -30px rgba(31, 26, 20, 0.18)",
        card: "0 1px 0 0 rgba(232, 223, 208, 1)",
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
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 350ms ease-out both",
        "slide-in-right": "slide-in-right 320ms ease-out both",
        "slide-down": "slide-down 250ms ease-out both",
      },
    },
  },
  plugins: [],
}
