/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          deep: "#0F1B2D",
          mid: "#1E2C42",
          soft: "#2A3A55",
        },
        bronze: {
          DEFAULT: "#B08D57",
          light: "#C9A876",
          dark: "#8E6F3F",
        },
        graphite: "#3A4555",
        slate2: "#5A6678",
        mist: "#E8ECF1",
        pearl: "#F7F9FC",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      boxShadow: {
        card: "0 2px 24px rgba(15,27,45,0.06)",
        hero: "0 24px 60px rgba(15,27,45,0.18)",
        soft: "0 8px 30px rgba(15,27,45,0.08)",
      },
    },
  },
  plugins: [],
}
