/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2D6A4F',
        'brand-green-light': '#52B788',
        'brand-green-pale': '#D8F3DC',
        'brand-cream': '#F9F5F0',
        'brand-brown': '#6B4226',
        'brand-text': '#1B2D1F',
        'brand-muted': '#5A7A62',
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
