/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F1',
        gold: {
          DEFAULT: '#C9A96E',
          hover: '#B8944F',
          light: '#F5F0E8',
        },
        warm: {
          black: '#1C1A18',
          gray: '#6B645C',
          beige: '#E5DFD6',
          dark: '#2C2824',
          muted: '#8B8378',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
