import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-gold': '#C5A059',
        'velmora-cream': '#F9F7F2',
        'velmora-obsidian': '#1A1A1A',
        'velmora-stone': '#8C8C8C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      }
    },
  },
  plugins: [tailwindAnimate],
}
