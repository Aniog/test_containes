/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#faf7f2',
        taupe: '#6b6359',
        gold: {
          DEFAULT: '#c9a96e',
          hover: '#b8944f',
          light: '#e8dcc8',
        },
        warm: {
          border: '#e8e3da',
          charcoal: '#2c2825',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.08em',
        wide: '0.05em',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
