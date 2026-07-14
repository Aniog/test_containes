/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        cream: "#F7F2EA",
        sand: "#EDE4D6",
        champagne: "#C9A96A",
        "champagne-deep": "#A8854A",
        espresso: "#3B2F26",
        taupe: "#8A7B6B",
        stone: "#6B6258",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
