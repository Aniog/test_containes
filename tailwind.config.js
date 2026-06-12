/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1419",
        graphite: "#2A2F36",
        steel: "#5B6471",
        mist: "#E6E8EC",
        bone: "#F5F2EC",
        ivory: "#FAF8F4",
        brass: {
          DEFAULT: "#B08A4A",
          deep: "#8E6E36",
          soft: "#E8DEC8",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,20,25,0.04)',
        card: '0 8px 30px rgba(15,20,25,0.06)',
      },
    },
  },
  plugins: [],
}
