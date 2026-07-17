/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#F8F5F2",
        accent: "#C5A059",
        muted: "#717171",
        border: "#E5E5E5",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
        ui: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        'widest': '0.2em',
        'wider': '0.15em',
        'wide': '0.1em',
      }
    },
  },
  plugins: [],
}
