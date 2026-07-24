/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#1f1714',
          canvas: '#f6f1eb',
          surface: '#ece2d7',
          gold: '#b89457',
          mist: '#d8c7b2',
          text: '#2f2722',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 18px 48px rgba(31, 23, 20, 0.08)',
        card: '0 12px 30px rgba(31, 23, 20, 0.06)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
    },
  },
  plugins: [],
}
