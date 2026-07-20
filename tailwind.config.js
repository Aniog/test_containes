/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        foreground: '#1E1812',
        accent: '#B48A4D',
        'accent-hover': '#9A733D',
        muted: '#6B5E51',
        subtle: '#E8E2D9',
        cream: '#F2EEE6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.2em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
