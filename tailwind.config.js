/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1014",
        graphite: "#1B1F26",
        steel: "#5B6473",
        silver: "#D7DBE0",
        mist: "#F4F5F7",
        bone: "#FAFAF8",
        accent: "#B8924A",
        accentSoft: "#E7DBC1",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.2em",
        wider2: "0.18em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
