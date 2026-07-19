/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Velmora brand palette — quiet luxury, warm editorial.
        cream: {
          50: "#FDFAF6",
          100: "#FAF6F1",
          200: "#F4ECDF",
          300: "#E9DCC6",
        },
        ink: {
          50: "#6B5E55",
          100: "#52443C",
          200: "#3D2F28",
          300: "#2A1F1A",
          400: "#1B130F",
        },
        gold: {
          50: "#F5EBD7",
          100: "#E8D4A8",
          200: "#D5B884",
          300: "#B8965A",
          400: "#A07F46",
          500: "#7E6232",
        },
        hairline: "#E5DED5",
        muted: "#9A8C82",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 6px 30px -10px rgba(43, 31, 26, 0.12)",
        card: "0 1px 2px rgba(43,31,26,0.04), 0 8px 24px -10px rgba(43,31,26,0.10)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
