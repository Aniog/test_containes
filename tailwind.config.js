/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F4EFE7",
        surface: "#FAF6EF",
        elevated: "#FFFFFF",
        ink: "#1A1310",
        inkSoft: "#6B5E52",
        inkFaint: "#9C8E80",
        gold: {
          DEFAULT: "#B89968",
          deep: "#8A7048",
          pale: "#E8D9BE",
        },
        hairline: "#E5DDD0",
        night: "#1A1310",
        nightSoft: "#2A211B",
        onNight: "#F4EFE7",
        onNightSoft: "#D8CFC2",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wide-2": "0.18em",
        "wide-1": "0.12em",
        "wide-nav": "0.16em",
      },
      maxWidth: {
        content: "1440px",
        "content-2xl": "1600px",
        shell: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(26, 19, 16, 0.18)",
        drawer: "-20px 0 60px -20px rgba(26, 19, 16, 0.25)",
      },
    },
  },
  plugins: [],
}
