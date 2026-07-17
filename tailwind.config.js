/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1F1A15",
        ink: "#2B2520",
        cream: "#F7F3EC",
        sand: "#EFE7DA",
        stone: "#8A7F72",
        gold: "#B08A4F",
        "gold-soft": "#9A763E",
        line: "#E2D8C8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.18em',
      },
    },
  },
  plugins: [],
}
