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
        champagne: "#B08D57",
        "champagne-deep": "#8A6D3F",
        ivory: "#F7F3EC",
        cream: "#FBF8F2",
        sand: "#E4DCCF",
        stone: "#8A7F73",
        rose: "#C9A98C",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        wide2: '0.15em',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(28,23,20,0.06)',
        card: '0 12px 40px rgba(28,23,20,0.08)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
