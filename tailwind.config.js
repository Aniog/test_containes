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
          DEFAULT: '#0f0f0f',
          800: '#1a1a1a',
          700: '#2d2d2d',
        },
        cream: {
          DEFAULT: '#f7f5f2',
          100: '#faf9f7',
          200: '#efede9',
        },
        gold: {
          DEFAULT: '#c9a050',
          dark: '#a8833d',
          light: '#d9b978',
        },
        muted: '#8a857d',
        hairline: '#e2ddd6',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      borderRadius: {
        'none': '0',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
