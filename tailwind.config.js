/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "court-orange": "#F97316",
        "court-orange-dark": "#EA580C",
        "court-black": "#0F0F0F",
        "court-dark": "#1A1A1A",
        "court-gray": "#2A2A2A",
        "court-light": "#F5F5F5",
        "court-muted": "#9CA3AF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
