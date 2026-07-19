/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F6F1EA",
        ivory: "#FAF7F2",
        espresso: "#1C1612",
        mocha: "#2A211B",
        stone: "#8B7E72",
        "stone-dark": "#5C4F44",
        gold: {
          DEFAULT: "#B68A4E",
          deep: "#8C6730",
          soft: "#D9BE92",
        },
        rose: "#C49B8A",
        line: "#E5DED3",
        "line-dark": "#3A2E26",
        ink: "#0E0A07",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wider-2": "0.18em",
        "wider-3": "0.24em",
      },
      maxWidth: {
        "7.5xl": "88rem",
        prose: "65ch",
      },
      boxShadow: {
        soft: "0 2px 24px -12px rgba(28,22,18,0.18)",
        "soft-lg": "0 18px 48px -24px rgba(28,22,18,0.28)",
        ring: "0 0 0 1px rgba(229,222,211,1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};
