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
        ivoryLight: "#FAF6EF",
        espresso: "#1A1410",
        espressoSoft: "#2A211B",
        gold: "#B08850",
        goldHover: "#9A6F3D",
        goldLight: "#D4B98A",
        taupe: "#A89A8C",
        sand: "#E8DFD2",
        hairline: "#D8CFC1",
        warmBlack: "#0E0A07",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      maxWidth: {
        content: "1280px",
        wide: "1440px",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(26, 20, 16, 0.06)",
        softer: "0 1px 8px rgba(26, 20, 16, 0.04)",
        card: "0 8px 40px rgba(26, 20, 16, 0.08)",
        elevated: "0 20px 60px rgba(26, 20, 16, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
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
    },
  },
  plugins: [],
};
