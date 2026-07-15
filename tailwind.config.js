/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        velvet: {
          50: "#f7f5f2",
          100: "#ece8e1",
          200: "#d9d1c3",
          300: "#c0b49e",
          400: "#a8977a",
          500: "#988564",
          600: "#8a7658",
          700: "#746049",
          800: "#5f4f40",
          900: "#504336",
          950: "#2d241c",
        },
        gold: {
          50: "#fdf8ed",
          100: "#f9ecc9",
          200: "#f2d98f",
          300: "#ecc45a",
          400: "#e6b02e",
          500: "#d4941a",
          600: "#b87614",
          700: "#935614",
          800: "#7a4618",
          900: "#693b1a",
          950: "#3d1e0a",
        },
        midnight: {
          50: "#f3f4f6",
          100: "#d9dce4",
          200: "#b3b9c9",
          300: "#8690ab",
          400: "#5e6b8c",
          500: "#445072",
          600: "#354061",
          700: "#2b334f",
          800: "#252b42",
          900: "#1b1f30",
          950: "#10131f",
        },
      },
      letterSpacing: {
        wide: "0.08em",
        wider: "0.12em",
        widest: "0.16em",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
}
