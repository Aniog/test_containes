/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#F8F3EA",
        pearl: "#FFFCF6",
        espresso: "#231A15",
        mocha: "#6D5C50",
        champagne: "#B8894A",
        "champagne-dark": "#8C6534",
        mist: "#E7DCCB",
        blush: "#EFE1D2",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        velvet: "0 24px 70px rgba(35, 26, 21, 0.14)",
        soft: "0 14px 40px rgba(35, 26, 21, 0.08)",
      },
      letterSpacing: {
        product: "0.22em",
      },
    },
  },
  plugins: [],
}
