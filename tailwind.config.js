/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#f0f5fa",
          100: "#d9e6f4",
          200: "#b3ceea",
          300: "#7caada",
          400: "#4580c4",
          500: "#2364a8",
          600: "#194e88",
          700: "#15406f",
          800: "#0f4c81",
          900: "#0b1d2e",
        },
        blue: {
          50: "#f0f5fa",
          100: "#d9e6f4",
          700: "#15406f",
          800: "#0f4c81",
          900: "#0b1d2e",
        },
        amber: {
          100: "#fcebd0",
          200: "#f9d7a0",
          300: "#f5c370",
          400: "#f0b85a",
          450: "#e6a23c",
          500: "#e6a23c",
          600: "#c98a2f",
          700: "#a06d24",
          800: "#7a5220",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
