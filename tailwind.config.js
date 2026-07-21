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
          DEFAULT: "#1A1614",
          soft: "#26201D",
        },
        bone: {
          DEFAULT: "#F5F0E8",
          soft: "#EFE8DC",
        },
        champagne: {
          DEFAULT: "#C9A86A",
          deep: "#A8864D",
        },
        brass: "#8A6E3B",
        muted: {
          DEFAULT: "#8A7F73",
          dark: "#A89B8E",
        },
        line: {
          DEFAULT: "#E5DDD0",
          dark: "rgba(245, 240, 232, 0.10)",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.25em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(26, 22, 20, 0.06)",
        card: "0 8px 24px rgba(26, 22, 20, 0.08)",
        drawer: "-12px 0 32px rgba(26, 22, 20, 0.18)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
