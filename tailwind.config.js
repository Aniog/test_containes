/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-forest': '#2d6a4f',
        'green-leaf': '#52b788',
        'earth': '#a07850',
        'sky-nature': '#90c2e7',
        'cream': '#f8f5f0',
        'warm-stone': '#c4a882',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
