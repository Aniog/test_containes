/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        foreground: "#1A1A1A",
        accent: "#C5A059",
        muted: "#717171",
        border: "#E5E5E5",
        surface: "#F4F1EA",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        'widest-luxury': '0.2em',
      }
    },
  },
  plugins: [],
}
