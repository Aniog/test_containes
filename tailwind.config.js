/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F2EC",
          50: "#FDFAF6",
          100: "#F7F2EC",
          200: "#EFE8DC",
        },
        ink: {
          DEFAULT: "#1F1A14",
          900: "#0E0B07",
          800: "#1F1A14",
          700: "#2E2719",
        },
        gold: {
          DEFAULT: "#B8893E",
          50: "#F6EEDC",
          100: "#E9D7A8",
          400: "#C99A4A",
          500: "#B8893E",
          600: "#9A6E2A",
          700: "#7A561E",
        },
        taupe: {
          DEFAULT: "#7A6F5F",
          400: "#9A8F7E",
          500: "#7A6F5F",
          600: "#5C5244",
        },
        hairline: "#E4DCCF",
        surface: "#FBF7F1",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.32em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        soft: "0 8px 24px -12px rgba(31, 26, 20, 0.12)",
        ring: "0 0 0 1px rgba(31, 26, 20, 0.06)",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
}
