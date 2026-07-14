/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F5F0E8',
          300: '#EDE5D5',
          400: '#DDD0B4',
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
          muted: '#C9A96E',
          dark: '#8B6914',
        },
        espresso: {
          DEFAULT: '#1A1410',
          light: '#2A2420',
          medium: '#3D352E',
        },
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
    },
  },
  plugins: [],
}
