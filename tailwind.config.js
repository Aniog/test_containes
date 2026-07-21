/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        cream: "#F7F2EA",
        sand: "#EFE7DA",
        champagne: "#E7D8BE",
        gold: {
          DEFAULT: "#B08D57",
          deep: "#94723F",
        },
        stone: "#7A6F62",
        hairline: "#D9CFC0",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      boxShadow: {
        soft: '0 18px 40px -24px rgba(26,23,20,0.35)',
        card: '0 24px 60px -30px rgba(26,23,20,0.45)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
