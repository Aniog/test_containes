/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#1C1A19',
          soft: '#2E2B29',
        },
        ivory: '#FAF8F5',
        cream: '#F2EDE6',
        linen: '#E8E1D8',
        gold: {
          DEFAULT: '#B8914B',
          light: '#D4B06C',
        },
        blush: '#F3E7E0',
        muted: '#6B6560',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.16em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
