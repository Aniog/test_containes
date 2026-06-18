/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F1EA",
        bone: "#EAE3D5",
        sand: "#D9CFBE",
        ink: "#1F1A14",
        espresso: "#2A241D",
        muted: "#7A6F60",
        gold: "#B8893E",
        goldDeep: "#946C2C",
        goldSoft: "#E2C994",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        editorial: "0.18em",
        wider2: "0.24em",
      },
      maxWidth: {
        page: "1440px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(31, 26, 20, 0.06)",
        softer: "0 2px 12px rgba(31, 26, 20, 0.04)",
      },
    },
  },
  plugins: [],
}
