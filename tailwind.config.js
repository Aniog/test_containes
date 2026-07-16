/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",      // Deep refined base
        accent: "#C5A059",       // Warm gold/metallic
        "accent-foreground": "#FFFFFF",
        muted: "#F5F5F5",
        "muted-foreground": "#737373",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
}
