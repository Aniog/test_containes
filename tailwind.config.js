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
        ink: '#1c1917',
        'ink-soft': '#44403c',
        cream: '#faf8f5',
        'cream-warm': '#f5f2ed',
        'cream-dark': '#e7e2da',
        gold: '#bfa268',
        'gold-deep': '#aa8f50',
        'gold-light': '#d9c9a0',
        taupe: '#a8a29e',
      },
      letterSpacing: {
        widest: '0.22em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
