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
          dark: '#1C1917',
          paper: '#FAF9F6',
          gold: '#C49A5C',
          muted: '#A8A29E',
          divider: '#E7E5E4',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
      }
    },
  },
  plugins: [],
}
