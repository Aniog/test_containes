/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F4ECDF",
        cream: "#EDE3D2",
        ivory: "#FAF6EE",
        espresso: "#1B140E",
        ink: "#1B140E",
        muted: "#7A6B59",
        gold: "#A07A4A",
        "gold-hover": "#835F33",
        "gold-soft": "#C9A878",
        hairline: "#DCCFB8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1320px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "drawer-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "overlay-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "marquee-x": "marquee-x 40s linear infinite",
        "drawer-in": "drawer-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "overlay-in": "overlay-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
