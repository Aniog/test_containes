/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5F2",
        cream: "#FFFFFF",
        espresso: "#2C1E18",
        taupe: "#6F5E56",
        warmgray: "#A89B95",
        stonehair: "#E6DDD6",
        accent: {
          DEFAULT: "#B8956A",
          hover: "#9C7B54",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.18em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(44, 30, 24, 0.12)",
      },
    },
  },
  plugins: [],
}

