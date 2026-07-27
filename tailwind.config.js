/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#10243E",
          blue: "#1F6FEB",
          sky: "#EAF3FF",
          amber: "#D98A16",
          mist: "#F5F7FA",
          ink: "#172033",
          muted: "#5F6B7A",
          line: "#DDE5EE",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 36, 62, 0.12)",
      },
    },
  },
  plugins: [],
}
