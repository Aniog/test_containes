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
          bg: '#faf8f5',
          surface: '#ffffff',
          charcoal: '#1c1c1c',
          muted: '#6b6560',
          gold: '#bfa055',
          'gold-hover': '#a8883f',
          border: '#e8e4df',
          'border-dark': '#d6d0c9',
          cream: '#f5f0e8',
          'dark-bg': '#141414',
          'dark-surface': '#1e1e1e',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
