/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        primary: {
          DEFAULT: '#1A1A1A',
          foreground: '#FAF9F6',
        },
        accent: {
          DEFAULT: '#C5A059',
          foreground: '#FAF9F6',
        },
        muted: {
          DEFAULT: '#8D8273',
          foreground: '#1A1A1A',
        },
        surface: '#FDFDFA',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.2em',
        'super-wide': '0.3em',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
