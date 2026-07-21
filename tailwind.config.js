/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        velvet: "#19171A",
        truffle: "#2A2327",
        ivory: "#F8F3ED",
        porcelain: "#FFFDFC",
        champagne: "#E9DCCF",
        gold: "#B7925B",
        rosewood: "#6F4F4D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
      },
      boxShadow: {
        soft: "0 18px 48px rgba(25, 23, 26, 0.08)",
        card: "0 20px 50px rgba(25, 23, 26, 0.12)",
        lift: "0 24px 64px rgba(25, 23, 26, 0.18)",
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(183, 146, 91, 0.18), transparent 52%)",
      },
    },
  },
  plugins: [],
}
