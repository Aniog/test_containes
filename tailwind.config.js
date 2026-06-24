/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F6EFE6",
        ivory: "#F1E7D8",
        linen: "#E7DAC4",
        hairline: "#D7C9B5",
        espresso: "#1F1A14",
        charcoal: "#3B322A",
        gold: "#B08A4A",
        "gold-soft": "#D4B481",
        muted: "#8A7E6E",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.28em",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(31, 26, 20, 0.18)",
        ring: "0 0 0 1px rgba(215, 201, 181, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
