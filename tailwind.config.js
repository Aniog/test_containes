/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E0F12",
        graphite: "#2A2D33",
        steel: "#6B7280",
        mist: "#E6E8EC",
        bone: "#F6F4EE",
        canvas: "#FFFFFF",
        "amber-brand": "#C9892F",
        "amber-dark": "#A86F1F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
