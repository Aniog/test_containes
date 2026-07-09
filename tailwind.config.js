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
          cream: '#f6f3ef',
          espresso: '#2c211b',
          taupe: '#7a6b60',
          gold: '#c9a86c',
          'gold-hover': '#b89658',
          card: '#ffffff',
          hairline: '#e0d8cf',
          'hairline-dark': '#4a3f37',
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
