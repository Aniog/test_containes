/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: "#171310",
          soft: "#211B16",
          line: "#332A21",
        },
        cream: {
          DEFAULT: "#F5EFE5",
          soft: "#EFE7D9",
        },
        sand: "#A79B87",
        taupe: "#6E6254",
        gold: {
          DEFAULT: "#C9A35C",
          deep: "#A9823F",
          soft: "#E6D3AE",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Manrope'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      transitionDuration: {
        700: "700ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
      },
    },
  },
  plugins: [],
}
