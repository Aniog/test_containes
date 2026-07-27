/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1a5c38',
        emerald: '#2d9e5f',
        'sage-light': '#4ade80',
        mint: '#bbf7d0',
        pale: '#f0fdf4',
        dark: '#0f1f14',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
