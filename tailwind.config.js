/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F5EFE6",
        mist: "#F0EDE8",
        "skin-warm": "#D4A574",
        "skin-light": "#E8C9A0",
        "skin-deep": "#B8865A",
        "forest-deep": "#2D4A3E",
        "forest-mid": "#4A7C59",
        "forest-light": "#8FBC8F",
        "forest-pale": "#D4E8D4",
        "sky-deep": "#2C5F7A",
        "sky-mid": "#5B9EC9",
        "sky-light": "#B8D4E8",
        "sky-pale": "#E0EEF7",
        charcoal: "#1C2B2B",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "Georgia", "serif"],
        dancing: ['"Dancing Script"', "cursive"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
