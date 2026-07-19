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
          bg: '#F5F0EB',
          white: '#FAF7F2',
          dark: '#1A1614',
          gold: '#C9A96E',
          'gold-dark': '#B8944A',
          muted: '#8C8279',
          border: '#E0D8CF',
          light: '#EAE3DA',
          charcoal: '#2C2826',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
