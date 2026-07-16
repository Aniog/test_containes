/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1C1714",
        ink: "#2A2420",
        cream: "#F7F3EC",
        sand: "#EFE7DA",
        stone: "#8A7F73",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#94723F",
        },
        champagne: "#E8D9BE",
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
