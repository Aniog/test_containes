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
          DEFAULT: "#1A1714",
          soft: "#2A2520",
        },
        cream: {
          DEFAULT: "#F7F3EC",
          deep: "#EFE8DC",
        },
        sand: "#E3D9C7",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#9A7544",
          soft: "#C9A876",
        },
        charcoal: "#2A2520",
        stone: "#7A7268",
        mist: "#B8AEA2",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      maxWidth: {
        "8xl": "88rem",
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
