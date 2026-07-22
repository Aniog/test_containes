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
          dark: '#1A1512',
          cream: '#F5F0EB',
          gold: '#C9A96E',
          ink: '#2C2420',
          light: '#F5F0EB',
          muted: '#8C8279',
          border: '#E5DDD5',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.1em',
      },
    },
  },
  plugins: [],
}
