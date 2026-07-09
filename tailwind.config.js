/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#FAF9F6',
        foreground: '#1A1A1A',
        accent: '#C4A484',
        platinum: '#E5E4E2',
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
