/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F4ED",
        champagne: "#EDE4D3",
        sand: "#D9CDB7",
        gold: {
          DEFAULT: "#C9A961",
          deep: "#8B6F3D",
          soft: "#E2D3A8",
        },
        espresso: "#1F1A14",
        mocha: "#3A2F22",
        "ink-soft": "#6B5D4A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: "0.18em",
        widest2: "0.22em",
        widest3: "0.32em",
      },
      maxWidth: {
        "8xl": "1280px",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(31, 26, 20, 0.18)",
        "soft-lg": "0 24px 60px -20px rgba(31, 26, 20, 0.22)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
