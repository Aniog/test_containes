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
        champagne: "#E8D9BE",
        gold: "#B08D57",
        "gold-dark": "#8A6A3B",
        espresso: "#3A2E22",
        taupe: "#7A6F60",
        stone: "#A99C8A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
