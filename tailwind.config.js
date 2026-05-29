/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          deep: '#1a0a0e',
          surface: '#2a1018',
          primary: '#7b1d2e',
          hover: '#9b2d3e',
          gold: '#c9a84c',
          cream: '#f5ede0',
          muted: '#b89a8a',
          border: '#3d1a22',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
