/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quiet luxury palette for gold jewelry
        base: {
          50: "#FAF8F5",   // Warm off-white
          100: "#F5F2ED",  // Cream
          900: "#2C2522",  // Deep warm charcoal
          950: "#1C1917",  // Near black
        },
        gold: {
          400: "#D4C4A8",  // Light gold
          500: "#C5A46E",  // Warm gold accent
          600: "#B89778",  // Richer gold
          700: "#8B6F47",  // Deep gold
        },
        accent: "#C5A46E",
        muted: "#6B625C",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        'widest': '0.15em',
        'product': '0.08em',
      },
    },
  },
  plugins: [],
}
