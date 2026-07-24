/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F7F2",
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#C5A059",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#EAE6DF",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#707070",
          foreground: "#1A1A1A",
        },
        border: "#EAE6DF",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
}
