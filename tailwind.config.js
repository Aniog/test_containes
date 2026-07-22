/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F2E9",
        ivory: "#FBF7F0",
        bone: "#EFE6D3",
        hairline: "#E6DDC9",
        espresso: "#1A140F",
        "espresso-soft": "#231B14",
        ink: "#15110C",
        charcoal: "#2A241D",
        taupe: "#A89B8C",
        gold: "#B8924A",
        "gold-soft": "#D6B680",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.15em",
        widest: "0.2em",
        ultra: "0.32em",
      },
      maxWidth: {
        "screen-3xl": "1920px",
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(26, 20, 15, 0.4)",
        "soft-sm": "0 8px 30px -15px rgba(26, 20, 15, 0.25)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
