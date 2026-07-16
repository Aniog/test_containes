/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora quiet luxury palette
        velmora: {
          cream: "#F8F5F0",      // Warm off-white background
          ivory: "#F5F2ED",      // Soft ivory for cards
          sand: "#E5DFD6",       // Hairline dividers, borders
          taupe: "#9A8F82",      // Muted text, secondary
          brown: "#2C2522",      // Deep refined base - primary text
          gold: "#B89778",       // Warm metallic accent
          goldDark: "#A68665",   // Darker gold for hover
          warmGray: "#6B6259",   // Subtle text
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
