/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBF9F6",
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FBF9F6",
        },
        secondary: {
          DEFAULT: "#FBF9F6",
          foreground: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#C4A484",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#717171",
          foreground: "#FBF9F6",
        },
        border: "#E5E5E5",
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
