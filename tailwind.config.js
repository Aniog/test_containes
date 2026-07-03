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
          950: "#0E0B08",
          900: "#16120E",
          800: "#1F1A14",
          700: "#2A241C",
          600: "#3A3128",
          500: "#5A5044",
          400: "#8A7E6E",
          300: "#C7BBA8",
          200: "#E8DFD0",
          100: "#F5EFE6",
        },
        gold: {
          100: "#FBEFCB",
          200: "#F0D9A8",
          300: "#E8C68A",
          400: "#D4A857",
          500: "#B8893E",
          600: "#8E6924",
          700: "#5C4413",
        },
        rose: {
          400: "#D38B7B",
          500: "#C97B6B",
          600: "#A45F50",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.24em",
        widest3: "0.32em",
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(212,168,87,0.25), 0 20px 50px -30px rgba(212,168,87,0.4)",
      },
      maxWidth: {
        content: "1280px",
        wide: "1440px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-soft": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 700ms ease-out both",
        "fade-in-soft": "fade-in-soft 1200ms ease-out both",
        "marquee-slow": "marquee-slow 60s linear infinite",
      },
    },
  },
  plugins: [],
};

