/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14110F",
        "ink-soft": "#2A2420",
        cream: "#F7F2EA",
        "cream-deep": "#EFE7DA",
        sand: "#E3D7C4",
        gold: "#B08D57",
        "gold-deep": "#8C6E3F",
        "gold-soft": "#D9C29A",
        muted: "#8A8074",
        "muted-dark": "#A99C8B",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      maxWidth: {
        content: "80rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(20,17,15,0.18)",
        "soft-lg": "0 24px 60px -20px rgba(20,17,15,0.28)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
