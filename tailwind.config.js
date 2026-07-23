/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoa: {
          900: "#1A140F",
          800: "#241A14",
          700: "#3A2A20",
          600: "#5A4438",
        },
        cream: {
          50: "#FBF7F1",
          100: "#F5EFE6",
          200: "#E8DFD2",
          300: "#D6C9B5",
        },
        ink: {
          900: "#1F1A14",
          700: "#4A3F35",
        },
        gold: {
          300: "#E5D4A8",
          500: "#C9A86A",
          600: "#B89256",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        product: "0.16em",
        btn: "0.18em",
        nav: "0.3em",
      },
      maxWidth: {
        editorial: "1440px",
      },
      boxShadow: {
        soft: "0 2px 24px rgba(26,20,15,0.06)",
        softer: "0 1px 8px rgba(26,20,15,0.04)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
