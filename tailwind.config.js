/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#0F2A4A",
        "brand-blue": "#1A5FA8",
        "brand-sky": "#2E8BC0",
        "brand-red": "#C0392B",
        "neutral-50": "#F8FAFC",
        "neutral-100": "#F1F5F9",
        "neutral-200": "#E2E8F0",
        "neutral-400": "#94A3B8",
        "neutral-600": "#475569",
        "neutral-800": "#1E293B",
        "neutral-900": "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
