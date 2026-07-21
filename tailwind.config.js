/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#171310",
        espresso: "#241C16",
        ivory: "#FAF6F0",
        cream: "#F3EDE3",
        sand: "#E7DDCE",
        gold: "#A8842C",
        goldlight: "#C9A44C",
        bronze: "#8A6D3B",
        taupe: "#6E6156",
        stone: "#B8AB98",
        line: "#E2D8C8",
        linedark: "#3A2F26",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
}
