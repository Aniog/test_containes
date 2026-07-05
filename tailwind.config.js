/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFCF9",
        foreground: "#1A1A1A",
        primary: "#1A1A1A",
        accent: "#C5A059",
        muted: "#666666",
        border: "#E5E5E5",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        extrawide: "0.2em",
      },
    },
  },
  plugins: [],
}
