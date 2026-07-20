/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          dark: '#1c1917',
          light: '#f8f5f2',
          surface: '#ffffff',
          gold: '#8f6b2f',
          'gold-hover': '#7a5c29',
          'gold-light': '#c5a065',
          muted: '#8c857d',
          hairline: '#e8e3de',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(28, 25, 23, 0.06)',
        lift: '0 12px 30px rgba(28, 25, 23, 0.10)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
