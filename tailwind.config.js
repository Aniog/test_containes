/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1C1917',
        canvas: '#FAF8F5',
        surface: '#FFFFFF',
        muted: '#78716C',
        accent: '#B45309',
        'accent-hover': '#92400E',
        border: '#E7E5E4',
        star: '#D97706',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
