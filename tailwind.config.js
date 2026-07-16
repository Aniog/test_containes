/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: "#F8F3EA",
          parchment: "#EFE4D3",
          linen: "#D8C7AE",
          espresso: "#221913",
          cocoa: "#5B4638",
          gold: "#B58A4A",
          bronze: "#7E5A31",
          blush: "#E6D4C5",
        },
      },
      fontFamily: {
        serifDisplay: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        product: "0.22em",
        nav: "0.16em",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(34, 25, 19, 0.12)",
        jewel: "0 18px 48px rgba(181, 138, 74, 0.18)",
      },
      transitionTimingFunction: {
        velmora: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
